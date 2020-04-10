<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
  <head>
<style>
body{
background:#ddd;
font-family: "Comic Sans MS", cursive, sans-serif;        
}
.wrapper{
margin:0 auto;
width:700px;
}
.logo{
text-align:center;
}
table{
background:#fff;
}
th{
background:#333;
color:#fff;
}
a{
color:#333;
text-decoration:none;
}
a:hover{
color:#000;
text-decoration:underline;
}
</style>
  </head>
<body>
  <div class="wrapper">
    <div class="logo">
    <a href="http://techumber.com">
      <img src="logostd.png" />
    </a>
  </div>
  <table border="1">
    <tr>
      <th>Title</th>
      <th>URL</th>
    </tr>
    <xsl:for-each select="posts/post">
      <tr>
        <td><xsl:value-of select="title"/></td>
        <td>
          <a>
            <xsl:attribute name="href">
              <xsl:value-of select="url"/>
            </xsl:attribute>Tutorial
          </a>
        </td>
      </tr>
    </xsl:for-each>
  </table>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>