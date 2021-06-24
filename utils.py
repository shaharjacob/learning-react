import random
from typing import List, Tuple, Dict

import networkx as nx
from networkx.algorithms import bipartite
from sentence_transformers import SentenceTransformer, util


def get_spaces(i, n):
    return " ".join([""]*n)
    

def similarity(model: SentenceTransformer, s1: str, s2: str) -> float:
    return round(util.pytorch_cos_sim(model.encode(s1), model.encode(s2)).item(), 3)


def get_maximum_weighted_match(left_side: List[str], right_side: List[str]) -> List[Tuple[str, str, float]]:
    # return list of (head, tail, similarity).
    # head taken from the left side, tail taken from the right side (but this is simitry).
    model = SentenceTransformer('stsb-mpnet-base-v2')
    B = nx.Graph()
    B.add_nodes_from(list(range(len(left_side))), bipartite=0)
    B.add_nodes_from(list(range(len(left_side), len(left_side) + len(right_side))), bipartite=1)
    all_edges = {}

    for i, prop1 in enumerate(left_side):
        for j, prop2 in enumerate(right_side):
            similatiry = similarity(model, prop1, prop2)
            B.add_edge(i, len(left_side) + j, weight=max(0, 1-similatiry))
            all_edges[(i, len(left_side) + j)] = similatiry

    best_matching = bipartite.matching.minimum_weight_full_matching(B, weight='weight')
    similatiry_edges = []
    already_seen = set()
    for head, tail in best_matching.items():
        if (head, tail) not in already_seen and (tail, head) not in already_seen:
            similatiry_edges.append((head, tail, all_edges[(head, tail)]))
            already_seen.add((head, tail))

    return similatiry_edges


def get_nodes_for_app(props: List[str], start_idx: int, x: int, group: int) -> List[Dict]:
    return [
        {
            "id": i + start_idx, 
            "x": x,
            "y": i * 40,
            "label": node, 
            "group": str(group),
            "font": "12px arial #343434"
        }
        for i, node in enumerate(props)
    ]


def get_edges_for_app(edges: List[str], spaces: int = 80) -> List[Dict]:
    return [
        {
            "from": edge[0], 
            "to": edge[1], 
            "scaling": {
                "min": 0.01,
                "max": 1,
                "label": {
                    "enabled": True,
                    "min": 8,
                    "max": 20,
                },
            },
            "font": {
                "align": 'left',
            },
            "label": f"{get_spaces(i, random.randint(0, spaces))}{str(edge[2])}",
            "value": edge[2],
            "width": 0.5,
            "arrows": {
                "from": { "enabled": False },
                "to": { "enabled": False },
            },
        } 
        for i, edge in enumerate(edges)]