# Testing $$*TODO* software name$$ using Provengo
This directory contains the Provengo project for testing $$*TODO* software name$$.

$$*TODO* 
1. replace the name of the folder 'helloprovengo' with the name of your software (use underscore/title case to avoid spaces)
2. Search and replace for the word 'helloprovengo' in the entire project and replace it with the new folder name.  
$$

## Running the tests
To run a single random test, run:
```shell 
provengo run helloprovengo
```

See the [Provengo README](helloprovengo/README.md) for more useful commands.

## API
See [Provengo README](helloprovengo/README.md) for a short description of the API.
For a full documentation go to [https://docs.provengo.tech](https://docs.provengo.tech)

## How we tested:
1. We started by creating the story files.
2. We then ran the following command to generate the test model:
```shell
provengo analyze -f PDF helloprovengo   
```
3. We repeated steps 1-2 until we were satisfied with the generated model.
4. We added [Event definitions](helloprovengo/spec/js/EventDef.js) to define how the stories actuate the website using Selenium.
5. We used the following command to run the tests:
```shell
provengo run --show-sessions helloprovengo
```
6. We repeated steps 4-5 until we were satisfied with the result.
7. We recorded a video of the running tests and added it to the report. Since more than one browser session was opened, we recorded the entire screen. The link for the video is [here]($$*TODO* write the link$$).
8. We copied the generated graph of the model to a file named [model.pdf](model.pdf) inside this directory (the link should work).

### Story files
$$*TODO*: describe in high level the purpose of each of your story files (if you have more than one). The detailed description for each story file will be inside the file itself. Specifically, write for each bthread a comment that explain what it does and make sure that the bthread name reflects its purpose. See the "spec/Tests.story.js" file for an example.$$

### Events definition files
$$*TODO* describe in high level the purpose of each of your EventDef files. The detailed description for each EventDef file will be inside the file itself.
Specifically, write for each event a comment that explain what the event does, Also, make sure that the event name reflects its purpose. See the "spec/EventDef.js" file for an example.$$