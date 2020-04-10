/*<!--
    o                                                   o8      
   o8                                                   88      
  o88oo ooooooo   oooo 88   88  ooo  ooo  oo   oo    oo 88oooo.  ooooooo  ooooodb
   88   88       88    88   88  88   88   88P"Y8bP"Y8b  d8   8b  88        88 
   88   8888888  88    8888888  88   88   88   88   88  88   88  8888888   88
   88   88       88    88   88  88   88   88   88   88  88   88  88        88    
   888  ooooooo   8ooo 88   88   V888V   o88o o88o o88o  Y8b8P   oooooooo   d88b   

  @author:  Aravind Buddha
| @url:     http://www.techumber.com
| @date:    7 September 2012
| @email:   aravind@techumber.com
| @license: Free! to Share,copy, distribute and transmit , 
|               but i'll be glad if my name listed in the credits'
-->*/
    //DDUPload Class
    var DDUpload=function(options){
      //options to local o 
			this.o=options;
			var list=[];
      var cur;
			var dragZone = document.getElementById(this.o.dragZone);
			var result = document.getElementById(this.o.resultArea);
			var self=this;
      //initilize function
			this.init=function(){
				if (window.File && 
				window.FileReader && 
				window.FileList && 
				window.Blob) 
				{
			    
  				dragZone.addEventListener('dragover', this.drgFile, false);
  				dragZone.addEventListener('drop', this.drpFile, false);
				}
				else
				{
					alert("Your browser doesnot support");
				}
			};
        //drag event function
			  this.drgFile=function(e) {
			    e.stopPropagation();
			    e.preventDefault();
			    e.dataTransfer.dropEffect = 'move'; 
			  };
        //drop event function
			this.drpFile=function(e) {
    			e.stopPropagation();
    			e.preventDefault();
    			self.preview(e);
  			};
        //preview function for displaying files
  			this.preview=function(e){
  				var files = e.dataTransfer.files;
    			var output = [];
    			for (var i = 0, f; f = files[i]; i++) {
    				list.push(files[i]);
      				output.push('<div class="mini-layout"><p><b>Filename:</b>', escape(f.name), '</p>',
                  '<p><b>Filetype:</b>',f.type,'</P>',
                  '<p><b>Size:</b>',(Math.round(f.size * 100 / 1024) / 100).toString(),'KB</P>',
                  '<p><div class="progress progress-striped active"><div class="bar" id="pb',i,'" ></div></div></p>',
                  '</div>');
	    		}
	    		document.getElementById('result').innerHTML =  output.join('');
	    		self.uploadinit();
  			};
        //uplad intilizer
  			this.uploadinit=function(){
  				for (var i=0;i<list.length;i++) {
  					self.upload(list[i],i);
  				}
  			};
        //simple uplad ajax based
  			this.upload=function(ufile,i){
  				var xhr = new XMLHttpRequest();
  				var fd=new FormData();
  				fd.append('file',ufile);
        		xhr.upload.addEventListener("progress",function(e){self.uploadProgress(e,i)}, false);
            xhr.addEventListener("load", function(e){self.uploadFinish(e,i)}, false);
        		xhr.open("POST", self.o.uploadUrl);
        		xhr.send(fd);
  			};
        //upload process indicater
  			this.uploadProgress=function(e,i){
  				var percent = Math.round(e.loaded * 100 / e.total);

  					document.getElementById('pb'+i).style.width=percent.toString()+"%";
  			};
        //upload finish 
        this.uploadFinish=function(e,i){
            document.getElementById('pb'+i).style.width="100%";
        };

		};

	function initDDUpload(options){
    //initilizing object for DDUpload class
		var dup=new DDUpload(options);
    //calling inti with object
	    dup.init();
	}	
	


