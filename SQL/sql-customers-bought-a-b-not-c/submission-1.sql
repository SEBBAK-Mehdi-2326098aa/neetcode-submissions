SELECT c.customer_id, c.customer_name
FROM customers c
JOIN orders o ON o.customer_id = c.customer_id
WHERE o.product_name IN ('A', 'B')
  AND c.customer_id NOT IN (
      SELECT customer_id 
      FROM orders 
      WHERE product_name = 'C'
  )
GROUP BY c.customer_id, c.customer_name
HAVING COUNT(DISTINCT o.product_name) = 2
ORDER BY c.customer_name;