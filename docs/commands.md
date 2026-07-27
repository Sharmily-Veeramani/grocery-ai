# Git Commands

git status

git add .

git commit -m "message"

git push

git pull

git log --oneline


# Git Commands Cheat Sheet

## 1. git status

### Purpose
Shows the current state of your project.

### Use
- Displays modified files.
- Shows new (untracked) files.
- Shows staged files ready to commit.
- Indicates whether your branch is up to date.

### Example
```bash
git status
```

---

## 2. git add .

### Purpose
Stages all new and modified files for the next commit.

### Use
Use this after making changes to your project.

### Example
```bash
git add .
```

---

## 3. git commit -m "message"

### Purpose
Creates a snapshot (checkpoint) of all staged changes.

### Use
Write a meaningful message describing what you completed.

### Example
```bash
git commit -m "Added login page"
```

Other examples:
```bash
git commit -m "Fixed MongoDB connection"
git commit -m "Added AI grocery grouping"
git commit -m "Updated dashboard UI"
```

---

## 4. git push

### Purpose
Uploads your committed changes to GitHub.

### Use
Run this after every commit to back up your project online.

### Example
```bash
git push
```

---

## 5. git pull

### Purpose
Downloads the latest changes from GitHub to your computer.

### Use
Useful when:
- Working on another computer.
- Collaborating with others.
- Syncing your local project with GitHub.

### Example
```bash
git pull
```

---

## 6. git log --oneline

### Purpose
Displays the commit history in a short format.

### Use
Helps you review previous commits.

### Example
```bash
git log --oneline
```

Example output:
```text
64ea077 Initial Grocery AI project setup
a32bc11 Added login page
c12f891 Connected MongoDB
```

---

# Daily Git Workflow

Whenever you finish a feature:

```bash
git status
git add .
git commit -m "Describe what you completed"
git push
```

Example:

```bash
git status
git add .
git commit -m "Added grocery upload feature"
git push
```

---

# Useful Commands

## git remote -v

Shows the GitHub repository linked to your project.

```bash
git remote -v
```

---

## git branch

Shows all branches in your project.

```bash
git branch
```

---

## git branch -M main

Renames the current branch to `main`.

```bash
git branch -M main
```

---

## git init

Initializes Git in a project folder.

```bash
git init
```

Use this only once when starting a new project.

---

## git clone

Downloads an existing GitHub repository to your computer.

```bash
git clone https://github.com/username/project.git
```

---

# Git Workflow

Create Project
        ↓
git init
        ↓
Make Changes
        ↓
git status
        ↓
git add .
        ↓
git commit -m "message"
        ↓
git push
        ↓
GitHub Repository Updated