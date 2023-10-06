const limit = 50; // Heap memory usage limit in MB
let elements = []; // Array to hold generated DOM elements

// Function to generate DOM elements
const generateElements = () => {
  const container = document.getElementById("element-container");
  for (let i = 0; i < 10000; i++) {
    const element = document.createElement("div");
    element.classList.add("element");
    elements.push(element);
    container.appendChild(element);
  }
  updateMemoryUsage();
};

// Function to remove DOM elements
const removeElements = () => {
  const container = document.getElementById("element-container");
  elements.forEach((element) => {
    container.removeChild(element);
  });
  elements = [];
  updateMemoryUsage();
};

// Function to update memory usage display
const updateMemoryUsage = () => {
  const memoryValue = document.getElementById("memory-usage");
  const usedHeap = (performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2);
  memoryValue.textContent = `Heap Memory Usage: ${usedHeap} MB`;

  if (usedHeap >= limit && elements.length > 0) {
    alert(`Memory usage has exceeded ${limit} MB. Please optimize your actions to reduce memory consumption.`);
  }
};

// Add event listeners to buttons
document.getElementById("generate").addEventListener("click", generateElements);
document.getElementById("remove").addEventListener("click", removeElements);

// Set interval to update memory usage every second
setInterval(updateMemoryUsage, 100
