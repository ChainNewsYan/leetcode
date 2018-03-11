SELECT d.Name as Department,
       e.Name as Employee, 
       e.Salary
FROM   Department d, Employee e
WHERE  e.DepartmentId = d.Id AND
       (DepartmentId, Salary) IN
       (SELECT DepartmentId, max(Salary) FROM Employee Group By DepartmentId)
