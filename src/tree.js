function createChristmasTree(height) {
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree';

  // Add the star
  const star = document.createElement('div');
  star.className = 'star';
  star.textContent = '★';
  treeContainer.appendChild(star);

  // Add the layers of the tree
  for (let i = 1; i <= height; i++) {
    const layer = document.createElement('div');
    layer.className = 'layer';
    const spaces = ' '.repeat(height - i);
    const leaves = '*'.repeat(i * 2 - 1);
    layer.textContent = `${spaces}${leaves}${spaces}`;
    treeContainer.appendChild(layer);
  }

  // Add the trunk
  const trunkHeight = 2;
  for (let i = 0; i < trunkHeight; i++) {
    const trunk = document.createElement('div');
    trunk.className = 'trunk';
    trunk.textContent = '|||';
    treeContainer.appendChild(trunk);
  }

  return treeContainer;
}

const treeHeight = 10;
const treeContainer = document.getElementById('tree-container');
const treeHTML = createChristmasTree(treeHeight);

// Append the tree to the container
treeContainer.appendChild(treeHTML);
