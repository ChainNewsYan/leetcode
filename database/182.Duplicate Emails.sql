-- 简单去重
SELECT Email FROM Person
GROUP BY Email
HAVING COUNT(*)>1

git reflog 
git diff
git log --pretty=oneline
git log -1 --上一次提交信息，同理，git log -2 上两次提交信息
git status
git init 
git add
git commit 
git checkout --"a.txt"
git rm
git reset --hard HEAD
git push
git pull
git remote
git clone
git remote add NAME git@github.com:cxl/leetcode.git
ssh-keygen -t rsa -C "email"
git checkout -b Dev
git checkout master
git merge Dev
git branch -d Dev --无法删除自己当前所在的分支，必须先移动到master分支    
git branch -D Dev --大写D表示强制删除分支，即使这个分支还没有merge到master
Dev 