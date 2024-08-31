# Disease Prediction Webpage

## Summary
A disease prediction webpage using machine learning and data mining to calculate probabilities using Naive Bayes.

PLEASE NOTE, using the online GitHub repository rather than the zip file will give the most up to date version in which the webpage is being hosted using GitHub Pages and can be accessed by the link on the right hand side under the about section or [clicking here!](https://biranavan-sritharan.github.io/)

And also this reduces the risk of running into any potential errors when setting up the files in your own code editor (which there should not be any problems). Also please view the webpage at an 80% zoom level for best experience and to avoid any graphical issues*

## Progression demonstrated in webpage (IMPORTANT!)
There are some details in the webpage and JavaScript code that have been intentionally left in such as the diabetes predictor taking number input rather than ranges (or cluster values) or in the JS code it can be seen that when a value has a value of 0 there are 2 methods it has been given the value of 1. One which uses an if statement and another using || operator looking for a falsy value. Things like this are left in to show progress and improvement as the webpage was designed. Some of these are mentioned with comments in the code to make it easier to spot these situations!

## Requirements:

An internet connection is required to run this webpage since the program fetches the datasets from the GitHub repository directly and not locally!
If you decide to view this in your code editor, please install a way to host a live server from your machine. 
The one used in this project was the Live Server Extension on VSCode published by Ritwick Dey.
You can also try manually hosting your server in the terminal if this does not work

NOTE: the rest of this section is for setting up the discarded programs that are not part of the final project, more for looking at previous works and progress over time.
Also if you are planning on running any of the unused files, note they will not be able to work due to not having any datasets attached to a GitHub repository, however if you still wish to proceed with this, then there are a few libraries that will need to be installed for both JavaScript and Python versions.

### For Python programs:

Set up a virtual environment using the command in the terminal (preferably in your code editor that is running the program):

```console
python -m venv venv
```

This will create a venv folder to appear in your program folder, from here run this line in the terminal:

```console
venv/Scripts/activate
```

Now we can begin installing the python libraries required, which is just one, and the way to install this is to type again into the terminal this line:

```console
pip install pandas
```
Also worth noting if you are facing errors due to Execution Policy on your machine when trying to set up your virtual environment, then the following can be helpful (since this error occurred to me).
Open Windows PowerShell and you can check your execution policy with:

```console
Get-ExecutionPolicy -List
```

If localMachine or currentUser is set to undefined or restricted then switching them to RemoteSigned or ByPass will help fix this error. Note, this does open your machine to security risks so best to reset this back to normal when you are done. To change the value of execution policy:

```console
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
You can switch out RemoteSigned with ByPass or other policies and the scope can be changed to localMachine if needed.

### For JavaScript programs:
This is much simpler, some JavaScript programs require the json2csv and csv2json packages and to install this type the following into the terminal in your code editor:

```console
npm install csv2json
```
```console
npm install json2csv
```

But please note that these venv set ups or npm package installations is for unused or discarded programs, the actual final project does not have any pre-requisites.

## Using the website:
Overall the website is very simple and easy to use and there should not be any difficulty to navigate through it.

For optimal experience, zoom out to 80%. The main webpage (index.html) has 4 main sections (these can be navigated to with ease using the navigation bar at the top): Disease Predictor links, Guide, GitHub Redirect and Extra Information. The Guide contains basic information that is worth reading quickly, the GitHub logo will re-direct you back to the repository, extra information will contain more information that may answer any questions you may have with the webpage and its use. And finally there is the disease predictor links, three in total: one for diabetes, another for chronic kidney disease and the last one for Parkinson's. When you click on these links it will take you to another webpage, you can enter your information into the webpage into the labelled input boxes and once submit is clicked it will provide you with the probability of this disease occurring. The final result will appear in a red/blue glow and then there will be a list of more values, each which shows the contributions to the final probability value, and you can see what might be the cause of such a high or low final output. To re-direct yourself back to the homepage then click on the Home button beneath the title of the predictor.

## Ethical Concerns:
Now please note that this predictor is not a replacement for a doctor and if you really are concerned then please consult a medical professional. This predictor is only as good as the datasets used which have been sourced from public domain sources. 
