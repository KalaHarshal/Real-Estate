import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from the post route!');
});

router.post('/', (req, res) => {
  res.send('Post created successfully!');
});

router.put('/:id', (req, res) => {
  res.send(`Post with id ${req.params.id} updated successfully!`);
});

router.delete('/:id', (req, res) => {
  res.send(`Post with id ${req.params.id} deleted successfully!`);
});

export default router;