// Basic Button Click
document.getElementById('basic-btn').addEventListener('click', () => {
    alert('Button clicked!');
});

// AJAX Simulation
document.getElementById('load-ajax').addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('dynamic-content').innerText = 'AJAX Data Loaded!';
    }, 2000);
});

// Drag and Drop
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', 'dragged'));
dropzone.addEventListener('dragover', (e) => e.preventDefault());
dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.innerText = 'Item Dropped!';
});

// Modal Toggle
const modal = document.getElementById('modal');
document.getElementById('toggle-modal').addEventListener('click', () => {
    modal.style.display = 'block';
});
document.getElementById('close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Dynamic Table
let rowCount = 0;
document.getElementById('add-row').addEventListener('click', () => {
    rowCount++;
    const tbody = document.querySelector('#dynamic-table tbody');
    const row = `<tr><td>${rowCount}</td><td>Item ${rowCount}</td><td><button>Delete</button></td></tr>`;
    tbody.insertAdjacentHTML('beforeend', row);
});

// Progress Bar Simulation
document.getElementById('file-upload').addEventListener('change', () => {
    const progress = document.getElementById('progress-bar');
    let value = 0;
    const interval = setInterval(() => {
        value += 10;
        progress.value = value;
        if (value >= 100) clearInterval(interval);
    }, 200);
});