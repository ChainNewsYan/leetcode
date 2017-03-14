#除左外连接，右外连接，其他连接方式如果没有where条件，都会得到笛卡尔积

SELECT DISTINCT l1.Num AS ConsecutiveNums --去重复，当5个连续相同时，得到123,234,345 3个一样结果
FROM Logs l1,Logs l2,Logs l3
WHERE l1.Id = l2.Id-1 AND   l2.Id = l3.Id-1 --连续 
AND   l1.Num =l2.Num  AND   l2.Num =l3.Num  --相等
