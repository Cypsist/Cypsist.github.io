<!DOCTYPE html>
<html>
<head>
	<title>提示弹窗示例</title>
	<style>
		#popup {
			display: none;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			padding: 20px;
			background-color: #fff;
			border: 1px solid #ccc;
			border-radius: 5px;
			box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
			z-index: 999;
		}
	</style>
</head>
<body>
	<button onclick="showPopup()">显示提示弹窗</button>
	<div id="popup">
		<h2>这是一个提示弹窗</h2>
		<p>您可以在此添加提示信息。</p>
		<button onclick="hidePopup()">关闭</button>
	</div>
	<script>
		function showPopup() {
			document.getElementById("popup").style.display = "block";
		}
		
		function hidePopup() {
			document.getElementById("popup").style.display = "none";
		}
	</script>
</body>
</html>
