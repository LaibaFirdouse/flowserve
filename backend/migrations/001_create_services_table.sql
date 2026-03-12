CREATE TABLE IF NOT EXISTS services (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  price INT,
  category VARCHAR(100)
);

INSERT INTO services (id, title, price, category) VALUES
(1, 'UX Audit', 199, 'Design'),
(2, 'Frontend Consultation', 149, 'Development'),
(3, 'Performance Optimization', 299, 'Development'),
(4, 'UI Redesign', 249, 'Design'),
(5, 'Accessibility Review', 179, 'Design'),
(6, 'React Code Review', 159, 'Development'),
(7, 'Website Speed Audit', 189, 'Development'),
(8, 'Design System Setup', 349, 'Design'),
(9, 'Landing Page UX Review', 129, 'Design'),
(10, 'SEO Technical Audit', 199, 'Marketing'),
(11, 'Frontend Architecture Planning', 399, 'Development'),
(12, 'Mobile UX Optimization', 219, 'Design'),
(13, 'React Performance Profiling', 329, 'Development'),
(14, 'UI Consistency Audit', 149, 'Design'),
(15, 'Web Accessibility Fixes', 259, 'Design'),
(16, 'API Integration Consultation', 189, 'Development'),
(17, 'Frontend Testing Strategy', 279, 'Development'),
(18, 'UX Heuristic Evaluation', 169, 'Design'),
(19, 'Page Load Optimization', 229, 'Development'),
(20, 'Component Reusability Review', 199, 'Development'),
(21, 'Dashboard UX Review', 189, 'Design'),
(22, 'Design to Code Consistency Check', 209, 'Design'),
(23, 'Frontend Security Review', 319, 'Development'),
(24, 'Responsive Design Audit', 179, 'Design'),
(25, 'Codebase Maintainability Review', 299, 'Development')
ON CONFLICT (id) DO NOTHING;