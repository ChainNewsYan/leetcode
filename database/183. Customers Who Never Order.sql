SELECT Name as Customers FROM Customers as c
WHERE c.Id not in(
    SELECT CustomerId FROM Orders
)