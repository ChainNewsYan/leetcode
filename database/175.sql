SELECT 
    p.FirstName,p.LastName,a.City,a.State 
From 
    Person AS p
LEFT JOIN 
    Address AS a
ON
    p.PersonId = a.PersonId