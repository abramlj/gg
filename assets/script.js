document.getElementById('yesBtn').addEventListener('click', function() {
    document.getElementById('yesGif').style.display = 'block';
    document.getElementById('noGif').style.display = 'none';
    document.getElementById('h1').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
});

document.getElementById('noBtn').addEventListener('click', function() {
    document.getElementById('noGif').style.display = 'block';
    document.getElementById('yesGif').style.display = 'none';
    document.getElementById('h1').style.display = 'none';
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Show the new question
    document.getElementById('newQuestion').style.display = 'block';
});

document.getElementById('yesBtn2').addEventListener('click', function() {
    // Display the second GIF container and message
    document.getElementById('yesGif2').style.display = 'block';
    // Hide the second question and buttons
    document.getElementById('newQuestion').style.display = 'none';
});

document.getElementById('noBtn2').addEventListener('click', function() {
    alert("hahahaha pm nalang :(");
    // Reset the display
    resetDisplay();
});

document.getElementById('yesBtn2').addEventListener('click', function() {
    // Hide the first GIF container
    document.getElementById('yesGif').style.display = 'none';
    
    // Hide the "noGif" container
    document.getElementById('noGif').style.display = 'none';
    
    // Display the second GIF container and message
    document.getElementById('yesGif2').style.display = 'block';
    
    // Hide the second question and buttons
    document.getElementById('newQuestion').style.display = 'none';
});

function resetDisplay() {
    // Hide the new question
    document.getElementById('newQuestion').style.display = 'none';

    // Reset the display to initial state
    document.getElementById('h1').style.display = 'block';
    document.getElementById('yesBtn').style.display = 'block';
    document.getElementById('noBtn').style.display = 'block';

    // Hide all GIFs
    document.getElementById('yesGif').style.display = 'none';
    document.getElementById('noGif').style.display = 'none';
    // Hide the second GIF container
    document.getElementById('yesGif2').style.display = 'none';
}
