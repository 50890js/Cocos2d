var g_resources = [];

//Res references for textures
var res_textures = {
    cocosLogo_png : "res/textures/cocosLogo.png",
    bg_png: "res/textures/BG.png"
};
for (var i in res_textures ) {
	g_resources.push( res_textures[i] );
}

//Res reference for Icons
var res_icons = {
	sound_normal_png: "res/icons/audio_64X64.png",
	sound_off_png: "res/icons/audio_off_64X64.png"
}
for (var i in res_icons  ) {
	g_resources.push( res_icons[i]);
}

//Res for the Tiled maps
var res_tiledmaps = {
		level01: "res/tiled/Level01.tmx"
}
for (var i in res_tiledmaps  ) {
	g_resources.push( res_tiledmaps [i] );
}

//Res for the Sprites
var res_sprites = {
		
}
for (var i in res_sprites  ) {
	g_resources.push( res_sprites [i] );
}

//Res for the ccs
var res_ccs = {
	main_menu_layer: "res/cocosstudio/mainmenu_HomeLayer.json"
}
for (var i in res_ccs  ) {
	g_resources.push( res_ccs [i] );
}