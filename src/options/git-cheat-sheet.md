# Git Cheat Sheet

<hr>

### Credit: Most of this information was taken from [codecademy](https://www.codecademy.com/learn/learn-git)'s awesome Git tutorials.

## What is Git?

Git is a free, open-source version control system for tracking changes in computer files and coordinating work on those files among multiple people.

## What is GitHub?

GitHub is a web-based hosting service for version control using Git. In addition to offering all of Git's distributed version control and source management code, GitHub also provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.

## What is a "remote"?

A _"remote"_ is a shared Git repository that allows multiple collaborators to work on the same Git project from different locations. Collaborators work on the project independently, and merge changes together when they are ready to do so.

## Git Workflow

1.  Edit files in "working directory"
2.  Add files to the "staging area"
3.  Save changes to a Git "repository"

## Git Collaboration Workflow

1.  Fetch and merge changes from the remote
2.  Create a branch to work on a new project feature
3.  Develop the feature on your branch and commit your work
4.  Fetch and merge from teh remote again (in case new commits were made while you were working)
5.  Push your branch up to the remote for review

## Common Git Commands

### `git init`

Initializes a Git repository in a directory to start tracking changes to your project.

### `git status`

Displays the status of changes to the contents of the working directory.

### `git add filename`

Adds a file to the staging area.

### `git diff filename`

Displays the differences between a tracked file in the working directory and the staging area.

### `git commit -m`

Permanently stores changes from the staging area inside the repository, with an optional message describing the changes.

### `git log`

Displays a listing of previous versions of a project in chronological order. Each version listing contains a 40-character unique identifier (SHA), commit author, time and date of commit, and commit message.

### `git show HEAD`

Displays the HEAD commit, which is the commit you are currently on.

### `git checkout HEAD filename`

Changes a file in the working directory to the state it was in when you last made a commit.

### `git reset HEAD filename`

Resets a file in the staging area to the state it was in at the HEAD commit. Note this does not discard file changes in the working directory, just removes the changes from the staging area.

### `git reset commit_SHA`

Rewinds the project to its state denoted by the first 7 characters of the SHA of a previous commit.

### `git branch`

Displays the project's branches. An asterisk shows what branch you're currently on.

### `git branch new_branch`

Creates a new branch.

### `git checkout branch_name`

Switches between branches. Commits in the new branch won't affect the master branch.

### `git merge`

Merges all changes from a branch to the master branch. This is known as a _"fast forward"_ merge because Git fast forwards the master branch to be up to date with the other branch that contains the most recent commit.

If there are merge conflicts, remove the content you want to delete (i.e., the master branch's version or the other branch's version), as well as Git's special markings (HEAD, new_branch, >>>>>>>>, =========).

### `git branch -d branch_name`

Deletes an existing branch.

### `git clone remote_location clone_name`

Clones a remote to a local repository. Note that behind the scenes, Git gives the remote repository the name _"origin"_ so that you can refer to it more conveniently.

### `git remote -v`

Displays a list of a Git project's remotes. The remotes are listed twice: once for _"fetch"_ and once for _"push"_.

### `git fetch`

Checks if any changes have been made to remote and brings changes down to your local copy. This command **does not** merge changes from remote into your local copy; rather, it brings any changes into a remote branch called _"origin/master"_. In other words, your local master branch won't be updated until you run the command: `git merge origin/master`.

### `git pull`

Performs a `git fetch` followed by a `git merge`.

### `git push origin your_branch_name`

Pushes your branch up to the remote (i.e., _"origin"_). From there, other collaborators can review your branch and merge your work into the master branch, making it part of the definitive project version.
