#多表连接，select * from a,b 结果集为a*b笛卡尔积
#交叉连接，同上，得到笛卡尔积数量条记录,select * from a cross join b
#内连接，同交叉连接，得到笛卡尔积数量条记录 select * from a inner join b
#全外连接，同交叉连接，得到笛卡尔积数量条记录 select * from a full join b
#左外连接，右外连接，必须附表之间的条件，即select * from a left/right join b on ~
#除左外连接，右外连接，其他连接方式如果没有where条件，都会得到笛卡尔积

SELECT DISTINCT l1.Num AS ConsecutiveNums --去重复，当5个连续相同时，得到123,234,345 3个一样结果
FROM Logs l1,Logs l2,Logs l3
WHERE l1.Id = l2.Id-1 AND   l2.Id = l3.Id-1 --连续 
AND   l1.Num =l2.Num  AND   l2.Num =l3.Num  --相等