# Git Cheat Sheet

<hr>

### Credit: Most of this information was taken from [codecademy](https://www.codecademy.com/learn/learn-git)'s awesome Git tutorials.

## What is Git?

Git is a free, open-source version control system for tracking changes in computer files and coordinating work on those files among multiple people.

## What is GitHub?

GitHub is a web-based hosting service for version control using Git. In addition to offering all of Git's distributed version control and source management code, GitHub also provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.

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

Restores a file in the working directory to the state it was in when you last made a commit.

### `git reset HEAD filename`

### `git reset commit_SHA`

### `git branch`

### `git branch new_branch`

### `git checkout branch_name`

### `git merge`

### `git branch -d branch_name`

### `git clone remote_location clone_name`

### `git remote -v`

### `git fetch`

### `git pull`

### `git push origin your_branch_name`
