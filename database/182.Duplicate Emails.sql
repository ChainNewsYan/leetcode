-- 简单去重
SELECT Email FROM Person
GROUP BY Email
HAVING COUNT(*)>1

git reflog 
git diff
git log --pretty=oneline
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