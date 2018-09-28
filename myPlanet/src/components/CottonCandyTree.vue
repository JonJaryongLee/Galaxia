<template>
	<div>
		<div class="container">
			<div class="outer">
				<div class="inner">
					<div class="centered">
						<h1 class="treeName">
							CottonCandyTree
						</h1>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style scoped>
	.treeName{
		font-family: 'Space Mono', monospace;
		color:green;

	}
	.container{
		width: 70%;
	  height: 70%;
	  margin: 40px auto;
	  background: red;
	}
	.outer {
  	display: table;
  	width: 100%;
  	height: 100%;
	}
	.inner {
  	display: table-cell;
  	vertical-align: middle;
  	text-align: center;
	}
	.centered {
  	position: relative;
  	display: inline-block;
 
	  width: 50%;
 	 	padding: 1em;
  	background: orange;
  	color: white;
	}
</style>