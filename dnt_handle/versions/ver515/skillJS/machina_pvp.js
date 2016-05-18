var SIM_LableHash = {
	'lvl':'Skill Lv.',
	'MP':'Fee MP',
	'cast':'Skill Type',
	'CD':'Cooldown',
	'lvlup':'Level Up Requirements',
	'effect':'Skill Description',
	'element':'Attribute',
	'weapon':'Required Weapon',
	'nexteffect':'Skill Description (Next Level)'
};

SIM_AddSkill({
	"7786": {
		name: "비트다운 EX 인스턴트 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Launch nearby enemies using shockwave and jump in spot while pressing <color_y>Regular Attack Button</color_y><color_w> to strike the ground powerfully with Knuckle Gear and then land.<br><br>After </color_w><color_y>Damage {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Step Up</color_y><color_w> you can press </color_w><color_y> Regular Attack Button</color_y><color_w>to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '383', '391', '399', '406', '414', '480', '489', '498', '520', '534', '546', '558', '570', '582', '594', '679', '694', '710', '726', '743', '844', '866', '888'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7716": {
		name: "Handstand (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>regular attack</color_y><color_w> to use your right arm to support the ground and rotate to get up.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '121']
		}
	},
	"7708": {
		name: "Retro Charge (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Fly-by Lv. 1<br>SP {t4}",
			'effect': "Press <color_y>regular attack button</color_y><color_w> during </color_w><color_y>Fly by</color_y><color_w> to quickly land on the ground.<br><br>Charging </color_w><color_y>regular attack button</color_y><color_w> at that moment resets </color_w><color_y>Fly by</color_y><color_w>'s cooldown and re-activates </color_w><color_y>Fly by</color_y><color_w>. </color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['8'],
			'{t4}': ['3'],
			'{t5}': [null, '']
		}
	},
	"7713": {
		name: "Charging Gear (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['10'],
			'{t4}': ['3'],
			'{t5}': [null, '']
		}
	},
	"7725": {
		name: "Foot Stomping (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 20 or above<br>SP {t4}",
			'effect': "<color_s>Gear Step<br></color_s><color_w>Increases Action Speed by </color_w><color_y>{t5}%</color_y><color_w><br><br>Create a shockwave on the ground with your right foot, then dash in a low stance while swaying your upper body.</color_w><color_y>(Stuns enemies when they are hit by a shockwave)<br><br>Stun Chance: {t6}%<br></color_y><color_y>Damage: {t7}%<br><br></color_y><color_v>Enhance Command<br>Click </color_v><color_y>Regular Attack Button</color_y><color_w> after casting </color_w><color_y>Ducking</color_y><color_w> to link the </color_w><color_v>Enhance Command</color_v><color_w> skill.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '25', '35', '45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '180', '191', '208', '240', '267', '325', '361', '405', '460']
		}
	},
	"7753": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "<br>Using <color_s>Gear Step</color_s><color_w> significantly increases </color_w><color_y>Super Armor</color_y><color_w> for a set amount of time and creates additional </color_w><color_y>Steam</color_y><color_w>.<br><br></color_w><color_y>Creates {t5} additional Steam<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '1'],
			'{t6}': [null, '5']
		}
	},
	"7715": {
		name: "Nitrous Overhaul (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases the final damage that you and your nearby allies deal.<br><color_y>Final Damage: +{t5}%<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['34'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '300']
		}
	},
	"7762": {
		name: "Taunting Blow (PVP)",
		changeskill: "7770",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Auto-repair Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Low-jump forwards and hit enemy, leaving  <color_y>Mark</color_y><color_w>. If you press </color_w><color_y>Special Attack Button</color_y><color_w>, you can pop the  </color_w><color_y>Mark</color_y><color_w> on the enemy. <br><br></color_w><color_y>Damage {t5}%<br><br></color_y><color_y>Mark: </color_y><color_w>Taunt User<br></color_w><color_y>Duration {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '277', '285', '293', '301', '309', '356', '365', '375', '385', '395', '447', '459', '471'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7710": {
		name: "Lariat (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 163%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Effect is enhanced at Skill Level 6.)</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 165%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Effect is enhanced at Skill Level 6.)</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 167%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Effect is enhanced at Skill Level 6.)</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 169%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Effect is enhanced at Skill Level 6.)</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 171%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Effect is enhanced at Skill Level 6.)</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 189%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 192%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 195%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 197%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 204%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 226%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 242%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 248%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 257%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 264%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 297%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 305%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 313%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 321%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 330%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 371%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 383%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 396%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 409%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 423%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 479%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>', 'Roll once and use a Knuckle to drag enemies. <br>Can be activated by pressing <color_y>Special Attack Button</color_y><color_w> while casting </color_w><color_y>Fly By</color_y><color_w>.<br><br></color_w><color_y>Damage: 498%<br></color_y><color_y>Damage increases by 50% after Fly By is casted.<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>Press </color_w><color_y>Regular Attack Button</color_y><color_w> to strike the ground with a Knuckle and launch the enemies into the air while casting Lariat.<br></color_w><color_y>Additional Damage: 100%</color_y>']		}
	},
	"7755": {
		name: "Exploding Palm EX (PVP)",
		changeskill: "7784",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Follow Up EX Lv. 1<br>Follow Through Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances #Exploding Palm?E<color_w>.<br>A shockwave is created when Exploding Palm hits enemy. Press </color_w><color_y>special attack button</color_y><color_w> to create additional shockwaves. <br></color_w><color_y>Additional Wave Damage: {t5}%<br></color_y><color_y>All Element Resistance: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '100'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"7763": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Super Armor is temporarily greatly increased during <color_s>(Gear Step)</color_s><color_w> and using </color_w><color_y>(Aerial Parry, Beyond the Wall)</color_y><color_w> creates additional </color_w><color_y>(Steam)</color_y><color_w>.<br><br></color_w><color_y>Create {t5} additional (Steam)<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '1'],
			'{t6}': [null, '5']
		}
	},
	"7769": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beat Down EX Lv. 1<br>Class Mastery Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "When you use <color_y>Beyond the Wall</color_y><color_w>, </color_w><color_y>Beat Down EX</color_y><color_w> temporarily becomes an instant skill and can be used quickly.<br></color_w><color_y>Damage: +{t5}%</color_y><color_w><br></color_w><color_y>Beat Down and instant skills don't share cooldowns</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"7714": {
		name: "Piston Uppercut (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the <color_y>Special Attack Button</color_y><color_w> to strike a stunned enemy upward with a Knuckle.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '129']
		}
	},
	"7761": {
		name: "Auto-repair (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Strike of the Martyr Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Can negate abnormal status in any situation and when negated, momentarily becomes invincible.<br><br><color_y>Negate {t5} abnormal status<br></color_y><color_y>Invincible for {t6} sec<br><br></color_y><color_y>Recover cooldown for all Active Skill by {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '3'],
			'{t6}': [null, '0.5'],
			'{t7}': [null, '7']
		}
	},
	"7751": {
		name: "Overcharge (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Deus ex Machina Lv. 1<br>Charging Gear Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Charging Gear</color_y><color_w>'s charging stages increase and can attack stronger.<br><br></color_w><color_y>(Charging 1st stage)<br></color_y><color_w>Explodes powerfully with Knuckle Gear to move {t4} m and hits enemy.<br></color_w><color_y>Additional Damage: {t5}%<br><br></color_y><color_y>(Charging 2nd stage)<br></color_y><color_w>Gather energy in Knuckle Gear and attack enemy.<br></color_w><color_y>Additional Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['3'],
			'{t5}': [null, '300'],
			'{t6}': [null, '600']
		}
	},
	"7736": {
		name: "Aerial Parry (PVP)",
		changeskill: "7741",
		d1: {
			'lvl': '{n}',
			'weapon': "Knuckle",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 35 or above<br>SP {t4}",
			'effect': "Jump in place to assume a defensive stance. When you successfully defend yourself, you create <color_y>Healing Energy</color_y><color_w> in random directions.<br><br></color_w><color_y>Healing Energy: </color_y><color_w>Restores your allies' HP within the range<br><br></color_w><color_y>Invincible for {t5} sec when you successfully defend yourself.<br></color_y><color_y>Creates 1 Healing Energy when you successfully defend yourself.<br></color_y><color_y>Healing Energy Duration: {t6} sec<br></color_y><color_y>Restores {t7}% of HP in every 2 seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25'],
			'{t3}': ['28', '33'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '0.3', '0.3'],
			'{t6}': [null, '8', '8'],
			'{t7}': [null, '0.5', '0.75']
		}
	},
	"7768": {
		name: "Taunting Blow EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Taunting Blow Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Taunting Blow</color_y><color_w>.<br>Additional hit occurs when </color_w><color_y>Mark</color_y><color_w> explodes, thus increasing Damage, and also increases duration of </color_w><color_y>Mark</color_y><color_w>.<br><br></color_w><color_y>Additional Damage: {t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '15']
		}
	},
	"7705": {
		name: "Body Check (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Elbow Attack Lv. 1<br>SP {t4}",
			'effect': "Press <color_y>Special Attack Button</color_y><color_w> after </color_w><color_y>Elbow Attack</color_y><color_w> to rotate your body and create a shockwave with your shoulders.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '104', '106', '108', '110', '113', '122', '125', '130', '133', '136', '148', '152', '156', '160', '164', '180', '185']
		}
	},
	"7728": {
		name: "Step Up (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 25 or above<br>SP {t4}",
			'effect': "<color_s>Gear Step<br></color_s><color_w>Increases Action Speed by </color_w><color_y>{t5}%</color_y><color_w>.<br><br>Place a Knuckle on the ground and Tumble in place to kick enemies with your both feet in order to launch them into the air.<br><br></color_w><color_y>Damage: {t6}%<br><br></color_y><color_v>Enhance Command<br>Click </color_v><color_y>Jump</color_y><color_w> after casting </color_w><color_y>Ducking</color_y><color_w> to link the </color_w><color_v>Enhance Command</color_v><color_w> skill.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['17', '27', '37', '47', '57', '67', '77', '87', '97'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '208', '218', '234', '264', '283', '352', '384', '424', '473']
		}
	},
	"7732": {
		name: "Flying Knee-kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Steam Release Lv. 1<br>Machina SP Total 35 or above<br>SP {t4}",
			'effect': "Knee kick forwards and launch nearby enemies. After <color_y>(Connect 2 Regular Attack hits)<br><br></color_y><color_y>Damage {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Steam Release</color_y><color_w> you can press </color_w><color_y>Regular Attack Button </color_y><color_w>to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '203', '206', '208', '219', '223', '260', '269', '282', '292', '302', '337', '348', '360', '373', '387', '436', '454', '474', '495', '518', '590'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7701": {
		name: "Low Rear Hook (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Knock enemy off-balance with Knuckle Gear. <br><br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '109', '110', '112', '114', '115', '124', '126', '127', '129', '131', '140', '141', '143', '145', '146', '155', '157', '158', '160', '162', '171', '172', '174', '175', '177', '186', '188', '189', '191']
		}
	},
	"7740": {
		name: "Pressure Release (Defense) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overclocking Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '1'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10'],
			'{t8}': [null, '22'],
			'{t9}': [null, '1'],
			'{t10}': [null, '30']
		}
	},
	"7730": {
		name: "Twister Kick (PVP)",
		changeskill: "7783",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beat Down Lv. 1<br>Machina SP Total 30 or above<br>SP {t4}",
			'effect': "Bounce off both arms from a handstand to rotate and move forward while hitting an enemy. <br><br><color_y>Damage per hit {t5}%<br><br>After </color_y><color_v>Enhance Command<br></color_v><color_y>Step Up</color_y><color_w> you can press  </color_w><color_y>Special Attack Button</color_y><color_w> to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '115', '116', '117', '118', '119', '125', '126', '127', '129', '130', '136', '137', '138', '140', '141', '148', '149', '151', '153', '155'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7706": {
		name: "Tumble (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the same <color_y>direction key</color_y><color_w> twice in a row or press </color_w><color_y>Shift</color_y><color_w> and a </color_w><color_y>direction key</color_y><color_w> at the same time to evade in that direction.<br></color_w><color_y>Grants invincibility for {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2.6', '2.6'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '0.6']
		}
	},
	"7724": {
		name: "Overclocking (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 30 or above<br>SP {t4}",
			'effect': "Spread Knuckle Gear to absorb the surface energy.Click <color_y>attack button</color_y><color_w> to cancel skill.<br><br></color_w><color_y>Create {t6} (Steam) per {t5} sec<br>Increase Agility {t8}% for every {t7} (Steam)<br>Duration: {t9} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '2'],
			'{t7}': [null, '1'],
			'{t8}': [null, '1'],
			'{t9}': [null, '600']
		}
	},
	"7739": {
		name: "Pressure Release (Attack) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overclocking Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '1'],
			'{t6}': [null, '15'],
			'{t7}': [null, '30']
		}
	},
	"7719": {
		name: "Mental Fortitude (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'MP', 'MP', 'MP', 'MP', 'MP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"7766": {
		name: "Twister Kick EX (PVP)",
		changeskill: "7785",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twister Kick Lv. 1<br>Beat Down EX Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>[리핑오버]</color_y><color_w>를 강화한다.<br>시전 시 지면에서 일정시간 회전하며 주변 적들을 끌어당긴 후 날아간다.<br></color_w><color_y>끌어당기는 동안 받는 피해 감소 {t5}%<br>\y추가 공격력 {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['50'],
			'{t4}': ['0'],
			'{t5}': [null, '20'],
			'{t6}': [null, '35']
		}
	},
	"7733": {
		name: "Kidney Blow (PVP)",
		changeskill: "7787",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flying Knee-kick Lv. 1<br>Machina SP Total 40 or above<br>SP {t4}",
			'effect': "After releasing an air current from Knuckle Gear and pulling nearby enemies closer, release at maximum to soar into the air with enemies. After <color_y>(Connect 2 Regular Attack hits)<br><br></color_y><color_y>Damage {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Steam Release</color_y><color_w> you can press </color_w><color_y>Special Attack Button </color_y><color_w>to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '188', '195', '199', '209', '215', '243', '250', '257', '264', '271', '303', '312', '321', '331', '341', '381', '394', '408', '422'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7754": {
		name: "Follow Up EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Follow Up Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Flow-up</color_y><color_w>.<br>Deal 3 additional hits with Knuckle Gear's rotation and activates by pressing </color_w><color_y>regular attack button</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '']
		}
	},
	"7707": {
		name: "Fly-by (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tumble Lv. 1<br>SP {t4}",
			'effect': "Press <color_y>Jump</color_y><color_w> during </color_w><color_y>Tumble</color_y><color_w> to fly forward close to the ground. Roll yourself to hit enemies.<br><br></color_w><color_y>Invincible for {t5} sec when skill is used<br></color_y><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['6'],
			'{t4}': ['3'],
			'{t5}': [null, '0.3'],
			'{t6}': [null, '321']
		}
	},
	"7737": {
		name: "Strike of the Martyr (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beyond the Wall Lv. 1<br>Machina SP Total 45 or above<br>SP {t4}",
			'effect': "Jump into the air to gather air currents and strike the ground to harm enemies. Create a <color_y>Barrier</color_y><color_w> to protect allies, taking a portion of the damage dealt to allies for a set time.<br><br></color_w><color_y>Damage {t5}%<br></color_y><color_y>Damage to Allies In Barrier reduced by {t6}% <br>Physical Defense +{t7}% <br></color_y><color_y>Duration {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['225', '225', '225'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '566', '640'],
			'{t6}': [null, '20', '30'],
			'{t7}': [null, '10', '20'],
			'{t8}': [null, '10', '10']
		}
	},
	"7726": {
		name: "Follow Up (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Foot Stomping Lv. 1<br>Machina SP Total 25 or above<br>SP {t4}",
			'effect': "Launch enemies while dashing and rotate body while pressing <color_y>Regular Attack Button</color_y><color_w> and hit the enemy once more with right foot. After </color_w><color_y>(Connect 3 Regular Attack hits)<br><br></color_y><color_y>Damage per hit {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Stomp Shuffle</color_y><color_w> you can press </color_w><color_y> Regular Attack Button</color_y><color_w> to activate and Skill Damage is also enhanced.<br><br></color_w><color_y>Enhance Command Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84', '87'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '117', '118', '118', '119', '120', '123', '125', '126', '127', '132', '138', '141', '144', '146', '149', '158', '161', '164', '168', '171', '185', '190', '196', '201'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7767": {
		name: "Beyond the Wall EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beyond the Wall Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Beyond the Wall</color_y><color_w>.<br>Effective on both allies and enemy.<br><br></color_w><color_y>Enemy Damage: -{t0]%<br></color_y><color_y>Enemy Damage: -{t6}%<br></color_y><color_y>Duration: (2) sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"7718": {
		name: "Health Bolster (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases max {t5} by <color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['20', '30', '40', '50', '60'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, 'HP', 'HP', 'HP', 'HP', 'HP'],
			'{t6}': [null, '15', '18', '21', '24', '27']
		}
	},
	"7723": {
		name: "Beyond the Wall (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 40 or above<br>SP {t4}",
			'effect': "Launch Knuckle Gear mid-air to move a short distance. Use <color_y>regular attack button</color_y><color_w> while moving to attempt grabbing mid-air and in case of using it on allies or self, endows </color_w><color_y>Enhancement Energy</color_y><color_w> and </color_w><color_y>Barrier</color_y><color_w>.<br><br></color_w><color_y>(Barrier)<br></color_y><color_y>Create Barrier that absorbs damage<br></color_y><color_y>Barrier Durability {t5}<br><br></color_y><color_y>Enhancement Energy<br></color_y><color_y>Increase Physical Defense by {t6}% of Damage<br></color_y><color_y>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623', '2623'],
			'{t6}': [null, '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40', '42', '44'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7717": {
		name: "Aerial Evasion (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "When launched into the air, press the <color_y>[Jump]</color_y><color_w> key to land on your feet.<br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18'],
			'{t3}': ['14'],
			'{t4}': ['5'],
			'{t5}': [null, '18']
		}
	},
	"7758": {
		name: "Pressure Burst EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Pressure Burst Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Pressure Burst</color_y><color_w>.<br>Action Speed increases and hit count of combo greatly increases.<br></color_w><color_y>Increase combo count by 30%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '']
		}
	},
	"7727": {
		name: "Follow Through (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Follow Up Lv. 1<br>Machina SP Total 30 or above<br>SP {t4}",
			'effect': "Charge energy in Knuckle Gear and release it forwards. When a nearby enemy is hit, the energy explodes and continuous waves are created. <br><br><color_y>Damage {t5}%<br></color_y><color_y>Continuous Wave Additional Damage {t6}% <br><br>After </color_y><color_v>Enhance Command<br></color_v><color_y> Stomp Shuffle</color_y><color_w> you can press </color_w><color_y> Special Attack Button</color_y><color_w> to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '112', '113', '115', '116', '119', '125', '127', '137', '141', '146', '160', '165', '170', '176', '181', '202', '209', '217', '226', '235', '265', '277'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7759": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kidney Blow EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Follow Through</color_y><color_w>, </color_w><color_y>Kidney Blow EX</color_y><color_w> temporarily becomes an instant skill and can be used quickly.<br></color_w><color_y>Damage: +{t5}%</color_y><color_w><br></color_w><color_y>Kidney Blow and instant skills don't share cooldowns</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"7703": {
		name: "Hit and Hip (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>Special Attack Button</color_y><color_w> near enemies that fell on the ground to kick them with your right foot. You lose balance and fall on your butt.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"7738": {
		name: "Pneumatic Reflex (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 40 or above<br>SP {t4}",
			'effect': "If <color_y>Regular Attack Button</color_y><color_w> is input mid-strike, then counter and take position and strike the ground with Knuckle Gear.<br><br></color_w><color_y>Damage {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '118', '122', '125', '127', '130', '142', '146', '150', '154', '159', '178']
		}
	},
	"7757": {
		name: "Kidney Blow EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kidney Blow Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Kidney Blow</color_y><color_w>.<br>Leap once more while airborne to attack.<br></color_w><color_y>Additional Leap Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"7704": {
		name: "Elbow Attack (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<br>Press <color_y>special attack</color_y><color_w> to quickly strike the enemy with your elbow.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"7752": {
		name: "Pressure Burst (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overcharge Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Dash with quick steps and strike with 3-hit using Knuckle Gear and Claw. If the last hit is successful, you can press <color_y>Regular Attack Button</color_y><color_w> to deal an explosive combo and if you press </color_w><color_y>Regular Attack Button</color_y><color_w> mid-combo, you can end it by punching forward. <br><br></color_w><color_y>Damage per Hit {t5}%<br><br></color_y><color_y>Additional Combo Attack<br></color_y><color_y>Damage per Hit {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '131', '133', '135', '137', '139', '149', '152', '155', '158', '161', '175', '179', '184'],
			'{t6}': [null, '66', '67', '67', '68', '69', '75', '76', '77', '79', '80', '88', '90', '92']
		}
	},
	"7731": {
		name: "Steam Release (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 25 or above<br>SP {t4}",
			'effect': "<color_s>[기어 스텝]<br></color_s><color_w>액션 속도 </color_w><color_y>{t5}%<br><br>너클기어를 역추진하여 뒤로 회피하고, 근접한 적들을 끌어당기는 기류를 발생시킨다.<br><br></color_y><color_y>공격력 {t6}%<br><br></color_y><color_v>[커맨드강화]<br></color_v><color_y>[더킹]</color_y><color_w> 시전 후 </color_w><color_y>[특수공격버튼] </color_y><color_w>클릭 시 </color_w><color_v>[커맨드 강화]</color_v><color_w> 스킬로 연계할 수 있다.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '288', '315', '353', '384', '416', '516', '561', '613']
		}
	},
	"7764": {
		name: "Aerial Parry EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Knuckle",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Aerial Parry Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Aerial Parry</color_y><color_w>.<br>Shoots out </color_w><color_y>Healing Energy</color_y><color_w> when you defend successfully. Increases the number of </color_w><color_y>Healing Energy</color_y><color_w> to 3 and Defense increases by </color_w><color_y>{t5}%</color_y><color_w> for 8 seconds when inside the Healing Energy.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['3'],
			'{t5}': [null, '5']
		}
	},
	"7784": {
		name: "Exploding Palm EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"7734": {
		name: "Ducking (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Machina SP Total 25 or above<br>SP {t4}",
			'effect': "<color_y>Jump</color_y><color_w> during </color_w><color_s>Gear Step</color_s><color_w> to get low and shimmy forward. Also activates when pressing </color_w><color_y>jump</color_y><color_w> after doing a </color_w><color_y>Body Check</color_y><color_w>.<br><br>When used with </color_w><color_s>Gear Step</color_s><color_w>, cooldown is drastically reduced.<br><br>Gear Step Cooldown: -{t5}%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '40', '50', '60', '70', '80', '90', '100']
		}
	},
	"7712": {
		name: "Bounding Reaction (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 160%<br><br>(Effect is enhanced at skill Lv. 6.)</color_y>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 162%<br><br>(Effect is enhanced at skill Lv. 6.)</color_y>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 163%<br><br>(Effect is enhanced at skill Lv. 6.)</color_y>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 165%<br><br>(Effect is enhanced at skill Lv. 6.)</color_y>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 167%<br><br>(Effect is enhanced at skill Lv. 6.)</color_y>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 181%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 183%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 185%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 189%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 191%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 207%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 217%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 221%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 226%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 250%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 283%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 293%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 303%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 313%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 323%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 363%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 376%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 389%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 403%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 419%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 475%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 495%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 516%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>', 'Kick enemies with a turn to launch them into the air. After casting this skill, you can link it to a full <color_y>Retro Charge</color_y><color_w>. <br><br></color_w><color_y>Damage: 539%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>After casting the skill, press the </color_w><color_y>Jump Button</color_y><color_w> to tumble backward and dodge the attack.</color_w>']		}
	},
	"7787": {
		name: "키드니블로우 인스턴스 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "After releasing an air current from Knuckle Gear and pulling nearby enemies closer, release at maximum to soar into the air with enemies. After <color_y>(Connect 2 Regular Attack hits)<br><br></color_y><color_y>Damage {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Steam Release</color_y><color_w> you can press </color_w><color_y>Special Attack Button </color_y><color_w>to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '152', '156', '158', '165', '168', '184', '188', '193', '197', '201', '220', '225', '231', '236', '242', '266', '274', '282', '290'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7785": {
		name: "Twister Kick EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"7735": {
		name: "Deus ex Machina (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Follow Through Lv. 1<br>Machina SP Total 45 or above<br>SP {t4}",
			'effect': "Insert all the air currents into the Knuckle Gear and rush forward. <color_y>Whirlpool</color_y><color_w> is formed during charge and moves towards the user for a period of time and when the  </color_w><color_y>Whirlpool</color_y><color_w> collides into the user, it disappears. <br><br></color_w><color_y>Damage {t5}%<br></color_y><color_y>Whirlpool Maximum Duration {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['225', '225', '225'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '200', '258'],
			'{t6}': [null, '20', '20']
		}
	},
	"7741": {
		name: "Passive Aerial Parry (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Able to cast the skill very quickly.<br><br></color_w><color_y>Skill Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['15', '25', '35', '45', '55', '65', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"7765": {
		name: "Beat Down EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Beat Down Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Beat Down</color_y><color_w>.<br>Pressing </color_w><color_y>Regular Attack Button</color_y><color_w> mid-air, pulls nearby enemy and land by hitting the ground.<br><br></color_w><color_y>Additional Damage: {t5}% </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['0'],
			'{t5}': [null, '35']
		}
	},
	"7721": {
		name: "Smashing Blow (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> to launch an enemy with a Knuckle while jumping.<br><br></color_w><color_y>Can be activated by pressing the regular attack button twice while jumping.<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['10'],
			'{t4}': ['1'],
			'{t5}': [null, '130']
		}
	},
	"7756": {
		name: "Flying Knee-kick EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flying Knee-kick Lv. 1<br>Patrona SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Flying Knee Kick</color_y><color_w>.<br>Pressing </color_w><color_y>regular attack button</color_y><color_w> while using the skill will activate the skill once more.<br></color_w><color_y>Additional Knee Kick Damge {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"7729": {
		name: "Beat Down (PVP)",
		changeskill: "7786",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Step Up Lv. 1<br>Machina SP Total 30 or above<br>SP {t4}",
			'effect': "Launch nearby enemies using shockwave and jump in spot while pressing <color_y>Regular Attack Button</color_y><color_w> to strike the ground powerfully with Knuckle Gear and then land.<br><br>After </color_w><color_y>Damage {t5}%<br><br></color_y><color_v>Enhance Command<br></color_v><color_y>Step Up</color_y><color_w> you can press </color_w><color_y> Regular Attack Button</color_y><color_w>to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '284', '289', '295', '299', '304', '347', '353', '359', '373', '382', '390', '398', '406', '414', '422', '477', '487', '497', '508', '519', '584', '598', '613'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7702": {
		name: "Pivot Strike (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Strike nearby enemies upward with a Claw and charge a Knuckle. Can deal <color_y>additional hits</color_y><color_w>while charging. <br></color_w><color_y>Regular Attack Button: </color_y><color_w>Launch the enemies into the air with a Knuckle.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Launch enemies into the air with a short Knuckle.\\ n</color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '109', '111', '112', '114', '116', '125', '127', '130', '136', '139', '152', '156', '159', '164', '168', '184', '190', '196']
		}
	},
	"7783": {
		name: "Twister Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Bounce off both arms from a handstand to rotate and move forward while hitting an enemy. <br><br><color_y>Damage per hit {t5}%<br><br>After </color_y><color_v>Enhance Command<br></color_v><color_y>Step Up</color_y><color_w> you can press  </color_w><color_y>Special Attack Button</color_y><color_w> to activate and Skill Damage is enhanced.<br><br></color_w><color_y>Enhance Command Damage {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '120', '121', '122', '124', '125', '132', '134', '136', '137', '139', '146', '148', '150', '152', '154', '162', '165', '167', '169', '172'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7720": {
		name: "Attuned Mind (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mental Fortitude Lv. 1<br>SP {t4}",
			'effect': "MP recovery every 2 sec: <color_y>{t5} </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['30', '40', '50', '60', '70'],
			'{t4}': ['1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '100', '150', '200', '250']
		}
	},
	"7770": {
		name: "Taunting Blow + Instance (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Taunt effect of <color_y>Taunting Blow</color_y><color_w> has ben further enhanced.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	}
});