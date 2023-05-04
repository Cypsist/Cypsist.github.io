<!DOCTYPE html>
<html>
<head>
	<title>弹窗示例</title>
	<style>
		#overlay {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0,0,0,0.5);
			display: none;
		}
		#popup {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: #fff;
			border: 1px solid #ccc;
			padding: 20px;
			border-radius: 5px;
			box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
		}
	</style>
</head>
<body>
	<button onclick="showPopup()">显示弹窗</button>
	<div id="overlay">
		<div id="popup">
			<h2>弹窗标题</h2>
			<p>这是一段弹窗内容。</p>
			<button onclick="hidePopup()">关闭</button>
		</div>
	</div>
	<script>
		function showPopup() {
			document.getElementById("overlay").style.display = "block";
		}

		function hidePopup() {
			document.getElementById("overlay").style.display = "none";
		}
	</script>
</body>
</html>
