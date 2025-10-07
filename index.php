<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redirect Dashboard</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>Redirect Dashboard</h1>

  <div class="form">
    <input type="text" id="domainInput" placeholder="Enter domain (example.com)" />
    <button onclick="addDomain()">Add Domain</button>
  </div>

  <div id="domainList"></div>

  <script src="redirect.js"></script>
</body>
</html>
