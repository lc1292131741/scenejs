SceneJS.renderer({ enableTexture2D: true },
                SceneJS.texture({
			layers: [{
		       		uri:"http://scenejs.org/library/textures/planets/mercury/mercurymap.jpg"
			}]			        
                },
                        SceneJS.objects.sphere({ rings: 30, slices: 30})
                        )                
        )