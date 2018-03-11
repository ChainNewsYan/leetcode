#解法1，求小于最高的salary结果集中的最高salary
SELECT max(Salary) AS SecondHighestSalary
FROM Employee 
WHERE Salary < (SELECT max(Salary) FROM Employee  );


#解法2，通过UNION得到salary和NULL的并集，去重，降序，选出第二个结果。
SELECT distinct(Salary) AS SecondHighestSalary 
FROM Employee
UNION SELECT NULL 
ORDER BY SecondHighestSalary DESC 
LIMIT 1,1;