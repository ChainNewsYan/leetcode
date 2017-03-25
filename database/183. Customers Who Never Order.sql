--  方法1
SELECT Name as Customers FROM Customers as c
WHERE c.Id not in(
    SELECT CustomerId FROM Orders
)

-- 方法2
SELECT c.Name as Customers FROM Customers c left join Orders o on c.Id = o.CustomerId 
WHERE CustomerId is null
