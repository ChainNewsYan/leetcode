-- 简单去重
SELECT Email FROM Person
GROUP BY Email
HAVING COUNT(*)>1