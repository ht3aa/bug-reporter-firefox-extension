document
  .getElementById("bugForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const prerequisites = document.getElementById("prerequisites").value;
    const steps = document.getElementById("steps").value;
    const testData = document.getElementById("testData").value;
    const expectedResult = document.getElementById("expectedResult").value;
    const actualResult = document.getElementById("actualResult").value;
    const pagePath = document.getElementById("pagePath").value;

    // Convert steps into ordered list format
    const stepsArray = steps.split("\n").filter((step) => step.trim() !== ""); // Split by new lines and filter out empty lines
    const stepsList = stepsArray.map((step) => `<li>${step}</li>`).join(""); // Convert each step to ordered list format

    // Create plain HTML formatted report content
    const reportContent = `
<h1>Bug Report</h1>
<p><strong>Bug Title:</strong></p>
<p>${title}</p>
<p><strong>Pre-requisites:</strong></p>
<p>${prerequisites}</p>
<p><strong>Steps:</strong></p>
<ol>${stepsList}</ol>
<p><strong>Test Data:</strong></p>
<p>${testData}</p>
<p><strong>Expected Result:</strong></p>
<p>${expectedResult}</p>
<p><strong>Actual Result:</strong></p>
<p>${actualResult}</p>
<p><strong>Page Path:</strong></p>
<p>${pagePath}</p>
<p><strong>Proof:</strong></p>
`;

    try {
      // Copy HTML content to clipboard
      await navigator.clipboard.writeText(reportContent);
      console.log("Bug report copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
    }
  });
