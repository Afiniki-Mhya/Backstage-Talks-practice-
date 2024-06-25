const body = document.getElementsByClassName(".body");
const issues = document.querySelectorAll('.issue');



document.addEventListener('scroll', () => {
    let closestIssue = null;
    let closestDistance = Infinity;
    
    issues.forEach(issue => {
        const rect = issue.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestIssue = issue;
        }
    });

    if (closestIssue) {
        const color = closestIssue.getAttribute('data-color');
        document.body.style.backgroundColor = color;
    }
});
