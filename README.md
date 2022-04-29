# run-actions-locally-proto

While working on E2E testing, I came across a promising tool that allows users to run GitHub Actions locally 🥳 ❗ We (as a team) may be getting more experience with GH Actions these days, but I personally still find it to be far from second-nature building out those `.yml` files.

I've got much more playing around to do with Act, but it seems like a great option to allow for some local testing and troubleshooting of GH Actions, particularly for Actions that are run on non-default branches and therefore cannot be manually triggered via the GH UI. I also look forward to cutting down on the number of failed Actions logged while I'm still ironing things out!

This project consists of a prototype Workflow that I've configured to run locally.

---

## nektos/act

Act leverages the Docker API, which is a technology that I have only danced around 💃  and thus I have very little to say about it. I can tell you the basics, here - that Docker is a more lightweight, scalable alternative to a virtual machine. That's a deep dive for another Research Central quest, though! 🛡️ ⚔️ But if you're interested, there's a bit of an explanation about _how_ Act leverages the Docker API in the Act documentation, linked below.

## :computer:&nbsp; Environment setup

- :whale:&nbsp;&nbsp; [Install Docker Desktop for Mac](https://docs.docker.com/desktop/mac/install/) (as we're all Mac users here):
  - If you're not sure if you should choose the installation for Intel or Apple chip, go to `About this Mac` in the Apple menu. If there's an item there listed as `Processor`, go for Intel; if it's listed as `Chip`, go for Apple chip.
  - Follow the installation instructions via the above link, including going through the quick-start tutorial that pops up in Docker (it may look a little different than in the instructions). This should also ensure that Docker is running.

- :clapper:&nbsp;&nbsp; Install Act by running this command in your terminal: 
```sh
brew install act
```
    
- :crossed_fingers:&nbsp; Confirm installation success:
```sh
act --version
```

:sparkles:&nbsp; At this point, your system should be set to run GH Actions locally.

---

## :robot:&nbsp; Create and run Workflow locally

:small_orange_diamond:&nbsp; If you haven't already, build out an `.yml` file which will serve as your workflow. If a workflow (or more) exists, confirm that Act recognizes it/them:
```sh
act -l
```
  - NOTE: by default, Act looks for workflows within `./.github/workflows`. Make sure that your directory structure conforms, or use the following command to learn about Act's `--workflows` flag:
```sh
act -h
```

:small_orange_diamond:&nbsp; When you're ready to try running the Workflow locally:

- Navigate to the root of the project on the command line.

- Run this command in your terminal: 
```sh
act
```
  - NOTE: if you have more than one Workflow, specify which to run using the following command (remember that the path is from the root of the project):
  ```sh 
  act --workflows <PATH-TO-YML-FILE>
  ```

:sparkles:&nbsp; If all is well, Act will begin to run your GH Action! See `act -h` for an extended list of commands, or check out the docs below.

---

## :books:&nbsp; Resources

- [nektos/act official docs](https://github.com/nektos/act)

- [Helpful walkthrough/example video](https://www.youtube.com/watch?v=8TBWRgU-JqI)