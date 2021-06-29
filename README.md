# Pre-requierments

1. Install Node.js: [https://nodejs.org/en/](https://nodejs.org/en/)  
Select **Add to PATH** when it asked.

2. Install vscode: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)  

3. Open vscode -> *Open folder* -> choose Desktop or wherever you want to work  

4. In vscode, in the top menu, go to: *File* -> *Auto Save*, make sure you have V on it.

5.	In vscode, in the top menu, go to: *Terminal* -> *new terminal*, then type:
```bash
git clone https://github.com/shaharjacob/learning-react.git
cd learning-react
pip install -r requirements.txt
python runme.py
```

* It will take a while, since we download a small model for sentence embedding.  
If everything is good, you should see the output: 0.925.  

6.	now, again in the vscode terminal, type:
```bash
cd webapp
npm install react-vis-network-graph
npm install @material-ui/core
npm install react-router-dom
npm start
```
* <font color="red">If npm is not recognize in vscode, **restart your computer**</font>  (restart vscode probably not work because of cache issues). 
* After `npm install <package>`, it's ok if you see something like: **84 packages are looking for funding. run `npm fund` for details.**  
  
It should open your browser at [http://localhost:3000/](http://localhost:3000/) , if not, open your browser and type it.  
If everything installed properly, you should see:  
![alt text](https://github.com/shaharjacob/learning-react/blob/main/images/hayadata.png?raw=true)  
