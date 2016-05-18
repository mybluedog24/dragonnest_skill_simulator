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
	"1220": {
		name: "Siege Stance (PVP)",
		changeskill: "1311",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Aerial Chain Shot Lv. 1<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "Hold your ground for <color_y>{t5}</color_y><color_w> seconds, turning all attacks into critical hits. You cannot move while this stance is active. Effect disappears when you use actions other than jumping. Incoming damage decrease by {t6}% while performing it.<br></color_w><color_y>Damage per Arrow: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '45', '48', '50', '60', '65', '110', '120', '134', '144', '155', '204', '217', '225', '230', '235', '282', '287']
		}
	},
	"1207": {
		name: "Rain of Arrows (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Siege Stance Lv. 1<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Fire numerous arrows to pierce enemies in a wide frontal range.<br><color_y>Damage per Arrow:<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '19', '21', '22', '26', '27', '35', '37', '39', '41', '43', '52', '53', '54', '56', '57']
		}
	},
	"1026": {
		name: "Piercing Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires a quick arrow that pierces enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '42', '45', '47', '49', '52', '71', '73', '76', '80', '82', '102', '110', '114', '119', '135', '168', '175', '183', '191', '198', '235', '239', '244', '249', '254', '291', '296', '302', '308']
		}
	},
	"1359": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stunning Shot Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Stunning Shot</color_y><color_w>, you quickly obtain {t5} </color_w><color_y>Fatal Guide</color_y><color_w>. <br><br></color_w><color_y>Damage +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '5']
		}
	},
	"1221": {
		name: "Ankle Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "Shoots arrows in three directions to bind the ankles of enemies, preventing them from moving for <color_y>{t5} seconds</color_y><color_w>. <br></color_w><color_y>Damage: {t6}%<br></color_y><color_y>Cannot move while casting</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5'],
			'{t6}': [null, '62', '77', '87', '125', '147', '213', '239', '257', '269', '282', '349']
		}
	},
	"1215": {
		name: "Walking Target (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Locate and strike an enemy's weak point. <br><color_y>Damage: {t5}%<br></color_y><color_y>Physical Damage +{t6}% <br></color_y><color_y>Magical Damage +{t7}% \Damage Taken: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '27', '29', '33', '44', '50', '66', '68', '70'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '60', '60', '60', '60', '60', '60', '60', '60']
		}
	},
	"1357": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Damage by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"1031": {
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
	"1009": {
		name: "Wisdom of the Owl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases your Critical Chance by <color_y>{t6}%</color_y><color_w> for </color_w><color_y>{t5} seconds</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['12'],
			'{t4}': ['10'],
			'{t5}': [null, '6'],
			'{t6}': [null, '40']
		}
	},
	"1303": {
		name: "Deathbloom (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lucky Shot Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "A large flower sprouts over the crosshair, drawing enemies to it. It explodes when it vanishes, damaging nearby enemies. When used in conjunction with other skills, your total physical damage temporarily increases.<br><color_y>Damage: {t5}%<br>Explodes {t6} sec after enemy contact<br>Final Damage: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['10', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '348', '366', '384', '403', '416', '491', '502', '513', '524', '536', '576', '599', '622'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t8}': [null, '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
		}
	},
	"1210": {
		name: "Rapid Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swift Shot Lv. 1<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Creates magical arrows to quickly pierce through enemies.<br></color_w><color_y>Damage per Arrow: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '85', '86', '88', '89', '90', '100', '101', '102', '103', '104', '111', '112', '113', '114', '116', '121', '122', '123']
		}
	},
	"1402": {
		name: "Marionette (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kick Shot Lv. 1<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "Fire a grappling arrow that pierces enemies within a the target cone, then reel them in for a chance to use <color_y>Somersault Kick</color_y><color_w> for an additional 50% damage.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '40', '41', '43', '44', '45', '58', '61', '72', '76', '82', '104', '109', '115', '121', '124', '147', '149', '151', '153']
		}
	},
	"1205": {
		name: "Fake Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tumble Lv. 1<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Use a normal attack during <color_y>Tumble</color_y><color_w> to jump backwards and shoot an arrow that pushes enemies back. <br></color_w><color_y>Piercing Attack<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '49', '51', '54', '56', '60', '89', '96', '102', '108', '113', '142', '144', '146']
		}
	},
	"1028": {
		name: "High Spin Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "After a <color_y>Low Spin Kick</color_y><color_w>, press the special attack button to dash forward with a powerful kick.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '32', '33', '35', '36', '37', '44', '46', '48', '49', '52', '59', '64', '66', '69', '71', '81', '83', '86', '88', '90', '100', '102', '104']
		}
	},
	"1354": {
		name: "Rapid Shot EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rapid Shot Lv. 1<br>Frag Arrow EX Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances Rapid Shot to auto-fire explosive arrows. Enemies hit more than {t5} times will only take {t6}% damage.<br></color_w><color_y>Critical Resist: -{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '12'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10'],
			'{t8}': [null, '10']
		}
	},
	"1301": {
		name: "Lucky Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Arrow Barrage Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Allows you to occasionally deal bonus damage on critical hits. This bonus damage is not affected by your weapon's attribute.<br><color_y>Proc Chance: {t5}%<br>Bonus Critical Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '25']
		}
	},
	"1415": {
		name: "Counter Ring Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "When attacked while airborne, press the regular attack button to counter with a ring shot. <br><color_y>Damage: {t5}%<br></color_y><color_y>Invincible for {t6} sec when skill is used</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '115', '129', '139', '169', '186', '255', '278', '291', '305', '320', '393'],
			'{t6}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3']
		}
	},
	"1356": {
		name: "Guided Missiles EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Guided Missiles Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances arrow count and explosion radius of Guided Missiles. All types of magic arrows will receive Fatal Guide upon dealing critical damage. Can use Fatal Guided Missiles with {t6}% damage when the Guided Missiles are enhanced after stacking Fatal Guide {t5} time(s). The activated effects do not disappear even when Fatal Guided Missiles are used and the cooldown of the Fatal Guided Missiles are recovered when the Fatal Guided Missiles are activated.<br></color_w><color_y>Guided Missile Damage: +{t7}%<br>Fatal Guided Missile Duration: {t8} sec<br>Fatal Guided Missile Cooldown: {t9} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '20'],
			'{t6}': [null, '100'],
			'{t7}': [null, '30'],
			'{t8}': [null, '5'],
			'{t9}': [null, '10']
		}
	},
	"1013": {
		name: "Tumble (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the same direction key twice to dodge in that direction. You can also press [Shift] and a direction key simultaneously to dodge in that direction.<br><color_y>Grants invincibility for {t5} sec when the skill is used.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2.6', '2.6'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '0.6']
		}
	},
	"1029": {
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
	"1206": {
		name: "Stunning Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "Shoots an arrow that delivers a powerful shock wave, with a chance to stun all enemies caught in it. Also affects other nearby enemies. To use this skill, press the normal attack button after <color_y>Spin Kick</color_y><color_w>. <br></color_w><color_y>Damage: {t5}%<br>Stun Chance: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '54', '61', '73', '81', '111', '158', '177', '196', '207', '217', '265', '276'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"1506": {
		name: "Furious Winds EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Furious Winds Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Furious Winds to leave additional whirlwinds. Press regular attack to create whirlwinds right next to you. Press special attack to leave whirlwinds while moving away. <br><color_y>Additional Hit Damage: {t5}% of Furious Winds damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"1217": {
		name: "Tumbling Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Use a special attack while <color_y>Tumbling</color_y><color_w> to jump high into the air and shoot an arrow that explodes on contact. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '51', '52', '54', '55', '57', '80', '83', '95', '99', '106', '138', '144', '150', '157', '160', '193', '196', '198', '200']
		}
	},
	"1557": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Damage after using Air Pounce or Eagle Dive.<br><color_y>Duration: {t5} sec<br>Damage +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '5']
		}
	},
	"1211": {
		name: "Hawk Ballista (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Guided Missiles Lv. 1<br>Archer SP Total 45 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Calls upon a hawk spirit to form a magical ballista that deals devastating damage to enemies.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1022', '1207']
		}
	},
	"1509": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nature's Rage Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Kick Shot</color_y><color_w>, </color_w><color_y>Astral Illusion</color_y><color_w> temporarily becomes an instant skill. <br><br></color_w><color_y>Damage Increase {t5}% <br>Astral Illusion and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"1412": {
		name: "Spirit Boost (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "Increases your movement and attack speed by <color_y>{t6}%</color_y><color_w> for </color_w><color_y>{t5} sec and quickly recovers skill cooldown time</color_y><color_w>.<br>Cooldown: -</color_w><color_y>{t7}</color_y><color_w>%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['48.4', '48.4'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '11'],
			'{t6}': [null, '30'],
			'{t7}': [null, '20']
		}
	},
	"1203": {
		name: "Guided Missiles (PVP)",
		changeskill: "1223",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rapid Shot Lv. 1<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Fires multiple enemy-seeking arrows. This skill cannot be activated if the target is out of range.<br></color_w><color_y>Damage per Arrow: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '19', '21', '22', '24', '26', '37', '39', '41', '43', '45', '56', '58', '60', '62', '64']
		}
	},
	"1551": {
		name: "Show Time! (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Falling Star Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Quickly recovers the cooldown of all <color_y>passive </color_y><color_w>skills by {t5}%.<br></color_w><color_y>Duration: {t6} sec<br>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '90'],
			'{t6}': [null, '15'],
			'{t7}': [null, '60']
		}
	},
	"1407": {
		name: "Cyclone Kick (PVP)",
		changeskill: "1560",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blooming Kick Lv. 1<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Knock enemies back with a powerful kick, then dash forward and perform a combo while the enemy is off-balance.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '263', '296', '312', '378', '404', '519', '555', '592', '630', '670', '802', '822', '844', '866', '890']
		}
	},
	"1413": {
		name: "Nature's Rage (PVP)",
		changeskill: "1510",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Furious Winds Lv. 1<br>Archer SP Total 45 or above<br>SP {t4}",
			'effect': "Charge forward, dealing a fury of attacks. You take less damage during this skill. <br><color_y>Physical Damage Taken: -{t5}%<br>Magic Damage Taken: -{t6}%<br></color_y><color_y>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '50', '50'],
			'{t6}': [null, '50', '50'],
			'{t7}': [null, '1581', '1877']
		}
	},
	"1008": {
		name: "Willow Kick (PVP)",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 67%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 70%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 74%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 77%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 81%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 103%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 108%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 128%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 169%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 192%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 245%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 269%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 291%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 301%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 312%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 363%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 375%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>', 'Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br><color_y>Damage: 387%<br><br>Increases the range and pulls enemies in.<br>Additional Damage: 25%</color_y>']		}
	},
	"1351": {
		name: "Ward of the Spirits (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hawk Ballista Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Increase Magic Damage for a set time.<br><color_y>Duration: {t5} sec<br>Damage +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '180'],
			'{t6}': [null, '12']
		}
	},
	"1030": {
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
	"1418": {
		name: "Spiritual Focus (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "Increases AGI for <color_y>{t5} seconds</color_y><color_w>.<br></color_w><color_y>Agility: +{t6}%<br>Acrobat Skill</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '180'],
			'{t6}': [null, '13.0']
		}
	},
	"1302": {
		name: "Charged Shot EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charged Shot Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Charged Shot's attack range, damage, and action speed. Obtain a <color_y>Wind Arrow</color_y><color_w> when dealing critical damage with Charged Shot. You consume {t6} </color_w><color_y>Wind Arrows</color_y><color_w> for the opportunity to attack with </color_w><color_y>Windforce</color_y><color_w> if you have more than {t5} </color_w><color_y>Wind Arrows</color_y><color_w>. Can use </color_w><color_y>Windforce</color_y><color_w> when pressing down the regular attack button to charge more. Can use skills that can be used while tumbling during the recoil of </color_w><color_y>Windforce</color_y><color_w>.<br></color_w><color_y>Charged Shot Damage: +{t7}%<br>Windforce Damage per hit: {t8}% of Charged Shot Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '30'],
			'{t8}': [null, '50']
		}
	},
	"1311": {
		name: "시즈 스탠스 EX 인스턴트 (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "단 한번의 사격에 집중한 시즈 스탠스입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1508": {
		name: "Hurricane Dance EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hurricane Dance Lv. 1<br>SP {t4}",
			'effect': "Enhances Hurricane Dance. Deals an extra <color_y>{t5}% of Max Damage</color_y><color_w> every time you hit, and the final attack deals more damage.<br></color_w><color_y>Final Attack Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '100'],
			'{t6}': [null, '50']
		}
	},
	"1401": {
		name: "Ring Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "You jump into the air to shoot a barrage of arrows in a circle around you. When hit, enemies are knocked back. <br><color_y>Damage: {t5}%<br></color_y><color_y>Critical Resist -{t6}%<br>Duration: {t7} sec<br></color_y><color_y>When using skill, invincible for {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '76', '78', '79', '86', '89', '119', '126', '135', '142', '150', '181', '190', '194', '197', '199', '228', '230'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3']
		}
	},
	"1507": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Damage after using Kick Shot or Somersault Dance.<br><color_y>Duration: {t5} sec<br>Damage +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '5']
		}
	},
	"1001": {
		name: "Twin Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Shoots a pair of arrows. This skill can reach 3m further than your normal attacks. Effective on knocked down enemies. <br>Damage (per arrow): {t5}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '34', '35', '36', '38', '39', '42', '44', '45', '46', '47', '51', '53', '55', '56', '62', '70', '72', '75', '78', '80', '89', '90', '92', '93', '94', '103', '104', '105', '107']
		}
	},
	"1553": {
		name: "Rising Storm (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Show Time! Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Twirl on the ground to create a tornado, pulling enemies in and launching them into the air.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '454', '479', '506', '533', '549', '649', '662', '676', '690', '705', '759', '790', '821']
		}
	},
	"1308": {
		name: "Deathbloom EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Deathbloom Lv. 1<br>SP {t4}",
			'effect': "Increases the explosion Damage.<br>Explosion Damage: +{t5}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"1201": {
		name: "Charged Shot (PVP)",
		changeskill: "1230",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Sends a charged arrow soaring forward to pierce an enemy. The attack range of this skill is 3m further than normal. Effective on knocked down enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '141', '144', '146', '149', '154', '176', '187', '193', '199', '226', '270', '288', '301', '314', '328', '390', '394', '399', '404', '409', '463']
		}
	},
	"1202": {
		name: "Aerial Chain Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charged Shot Lv. 1<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Fires multiple arrows from the air. <br><color_y>Must be airborne.<br>Damage per Arrow: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '25', '26', '27', '28', '29', '35', '37', '39', '40', '41', '50', '51', '52', '54', '55', '64', '66', '66', '67', '69']
		}
	},
	"1554": {
		name: "Eagle Dive EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Eagle Dive Lv. 1<br>Spiral Kick EX Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Eagle Drive's attack range and damage. Also increases the chance to destroy Super Armor. Press the special attack button afterwards to launch Somersault Kick. <br><color_y>Eagle Drive Damage: +{t5}%<br>Somersault Kick Damage: {t6}% of Eagle Drive damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20']
		}
	},
	"1021": {
		name: "Pin Wheel (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the attack button while knocked down to perform a whirling kick as you get back on your feet. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"1209": {
		name: "Swift Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frag Arrow Lv. 1<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Fires six penetrating arrows in all directions.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '67', '69', '71', '75', '77', '102', '105', '108', '125', '131', '160', '168', '176', '184', '193', '222', '224', '226', '229', '232']
		}
	},
	"1017": {
		name: "Spin Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while knocked down to push back an enemy with a roundhouse kick. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"1223": {
		name: "페이탈 가이디드 샷 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "강력한 가이디드 샷입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1019": {
		name: "Low Spin Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button near a knocked down enemy to perform a low roundhouse kick on them, slightly launching them. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '150']
		}
	},
	"1305": {
		name: "Siege Stance EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Siege Stance Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the range and damage of Siege Stance. Scatter {t5} small arrows in front of you by pressing the special attack button instead of the regular attack button. These arrows have a short range and deal {t6}% damage per arrow. Obtain a <color_y>Wind Arrow</color_y><color_w> when dealing critical damage with Siege Stance.<br></color_w><color_y>Siege Stance Damage: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '15'],
			'{t7}': [null, '20']
		}
	},
	"1212": {
		name: "Spiritual Focus (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "Increases AGI and INT for <color_y>{t5} seconds</color_y><color_w>. <br></color_w><color_y>Agility: +{t6}%<br>Intellect: +{t7}%<br>Bow Master Skill</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '180'],
			'{t6}': [null, '13.0'],
			'{t7}': [null, '13.0']
		}
	},
	"1219": {
		name: "Crossbow Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Crossbow",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Increases attack range and damage when using a crossbow.<br><color_y>Range: +{t5}m<br>Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '2.50'],
			'{t6}': [null, '5.0']
		}
	},
	"1552": {
		name: "Spiral Kick EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spiral Kick Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Spiral Kick's charge distance and damage. After casting the skill, press the special attack button to kick enemies into the air or press the regular attack button to use Spirit Shot.<br><color_y>Spiral Kick Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '70']
		}
	},
	"1213": {
		name: "Sylph's Aid (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "Increases speed and damage.<br><color_y>Action and Movement Speed: +{t6}%<br>Damage: +{t7}%<br>Duration: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['28'],
			'{t4}': ['10'],
			'{t5}': [null, '22'],
			'{t6}': [null, '30'],
			'{t7}': [null, '5.0']
		}
	},
	"1405": {
		name: "Kick Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Kicks enemies into the air before peppering them with arrows. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '157', '161', '164', '167', '173', '200', '214', '221', '229', '262', '315', '338', '353', '370', '386', '462', '468', '474', '480', '486', '552']
		}
	},
	"1310": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Siege Stance EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Fake Shot</color_y><color_w>, </color_w><color_y>Siege Stance EX</color_y><color_w> becomes an instant skill.<br><br></color_w><color_y>Damage +{t5}% <br>Siege Stance and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"1304": {
		name: "Aerial Chain Shot EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charged Shot EX Lv. 1<br>Aerial Chain Shot Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Aerial Chain Shot's range by creating an explosion. Press the special attack button for an additional hit. Obtain a <color_y>Wind Arrow</color_y><color_w> when dealing critical damage with Aerial Chain Shot.<br></color_w><color_y>Additional Hit Damage: {t5}% of Aerial Chain Shot damage<br></color_y><color_y>Critical Resist: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"1230": {
		name: "Windforce (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "This is a Finisher created with Wind Arrows.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1016": {
		name: "Moon Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while jumping to kick an enemy as you descend. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"1504": {
		name: "Marionette EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kick Shot EX Lv. 1<br>Marionette Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Marionette's attack range and damage. Makes enemies more vulnerable to Physical Damage. Also increases the chance to destroy Super Armor.<br><color_y>Marionette Damage: +{t5}%<br>Damage Taken: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"1501": {
		name: "Untouchable (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow, Quiver",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nature's Rage Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Dodge {t5}% of enemy attacks. <color_y>Spirit Shot, Spiral Kick,</color_y><color_w> and </color_w><color_y>Butterfly Float</color_y><color_w> can be used when this skill triggers.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '6']
		}
	},
	"1502": {
		name: "Kick Shot EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kick Shot Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Kick Shot's charge distance, so attacks can be launched immediately with the regular attack button. Also, shoots more arrows.<br><color_y>Kick Shot Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '70']
		}
	},
	"1024": {
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
	"1558": {
		name: "Rising Storm EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rising Storm Lv. 1<br>SP {t4}",
			'effect': "Enhances Rising Storm. You spin faster to deal more damage. <br><color_y>Damage +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"1306": {
		name: "Rain of Arrows EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rain of Arrows Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances the arrow count for Rain of Arrows. Press the regular attack button to perform an additional hit at the end of the skill. Obtain a <color_y>Wind Arrow</color_y><color_w> when dealing critical damage with Rain of Arrows.<br></color_w><color_y>Additional Hit Damage: {t5}% of Rain of Arrows damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '160']
		}
	},
	"1353": {
		name: "Detonating Arrow (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ward of the Spirits Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magic arrow that explodes {t5} sec after impact.<br></color_w><color_y>Damage: {t6}%<br>Explosion Range: {t7}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38', '38'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '316', '332', '349', '367', '377', '442', '450', '459', '469', '479', '513', '533', '553'],
			'{t7}': [null, '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5']
		}
	},
	"1505": {
		name: "Somersault Dance EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Somersault Dance Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Somersault Dance's damage and creates a whirlwind.<br><color_y>Somersault Dance Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"1410": {
		name: "Butterfly Float (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "When in the air or using Pin Wheel, double-tap a directional key or press [Shift] + directional key to perform a dodge in that direction.<br><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '8', '7', '6'],
			'{t3}': ['36', '46', '56', '66'],
			'{t4}': ['1', '1', '1', '1'],
			'{t5}': [null, '10', '8', '7', '6']
		}
	},
	"1555": {
		name: "Blooming Kick EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blooming Kick Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Blooming Kick. After casting it, press the regular attack button to leap into the air after kicking an enemy into the air. You can use Air Pounce or Eagle Dive while airborne.<br><color_y>Blooming Kick Damage: +{t5}%<br></color_y><color_y>Damage Taken: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"1406": {
		name: "Furious Winds (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Somersault Dance Lv. 1<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Call upon a powerful vortex of wind to perform consecutive attacks on enemies within range. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '203', '226', '237', '280', '298', '381', '406', '431', '457', '484', '581', '594', '608', '623', '638']
		}
	},
	"1417": {
		name: "Chain Tumble (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Jump during a <color_y>[Tumble]</color_y><color_w> to use the momentum to dodge even further. <br></color_w><color_y>Cooldown:{t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '13.5', '12.15', '10.935', '9.842', '8.857', '7.972', '7.174'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '15', '13.5', '12.2', '11', '9.9', '8.9', '8', '7.2']
		}
	},
	"1355": {
		name: "Swift Shot EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swift Shot Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances Swift Shot to fire more arrows. After casting the skill, press the regular attack button to launch an additional frontal attack. <br></color_w><color_y>Additional Hit Damage: {t5}% of Swift Shot damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"1408": {
		name: "Air Pounce (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Press the jump key again after a jump to come smashing down on the enemy. Can jump {t5} times max. <br><color_y>Damage per Jump: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '42', '43', '44', '45', '46', '53', '58', '60', '62', '72', '90', '95', '99', '104', '109', '130', '132', '133', '135', '137', '156']
		}
	},
	"1559": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cyclone Kick EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "Using <color_y>Rising Storm</color_y><color_w> temporarily changes </color_w><color_y>Cyclone Kick EX</color_y><color_w> to an instant skill and can attack quickly. For the charge, the damage is incorporated into other hits.<br></color_w><color_y>Increase Damage<br>Cyclone Kick and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"1560": {
		name: "Cyclone Kick EX Instant (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Cyclone Kick can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1416": {
		name: "Spirit Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Press the attack button during <color_y>Tumble</color_y><color_w> to charge and fire energy, and then dodge backwards. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '50', '52', '53', '56', '57', '85', '89', '94', '118', '125', '175', '185', '196', '208', '219', '269', '272', '275', '278', '281']
		}
	},
	"1420": {
		name: "Enhanced Quake Barrage (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "This version of Quake Barrage is enhanced by Show Time!",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['0', '0'],
			'{t5}': [null, '', '']
		}
	},
	"1027": {
		name: "Magic Arrow (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: {t5}%<br><br>(The effect is enhanced at skill lv. {t6}.)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '26', '28', '29', '30', '31', '45', '49', '50', '52', '60', '79', '99', '106', '115', '123', '157', '166', '175', '181', '184', '221', '225', '230', '235', '240', '281', '287'],
			'{t6}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6']
		}
	},
	"1352": {
		name: "Frag Arrow EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frag Arrow Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances the damage of Frag Arrow. <br></color_w><color_y>Frag Arrow Damage: +{t5}%<br>Splintered Arrow Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20']
		}
	},
	"1032": {
		name: "Fury of the Owl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases the critical chance of yourself and allies by <color_y>{t5}%</color_y><color_w>. <br>Duration: {t6} sec</color_w>",
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
	"1358": {
		name: "Detonating Arrow EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Detonating Arrow Lv. 1<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>You can fire up to {t5} Detonating Arrows consecutively. However, you gain no change in Defense. </color_w><color_y>Left-Click</color_y><color_w> to shoot each additional arrow.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '2']
		}
	},
	"1510": {
		name: "Astral Illusion Instant (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Astral Illusion can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['0', '0'],
			'{t5}': [null, '', '']
		}
	},
	"1419": {
		name: "Shortbow Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Increases attack range and damage when using a shortbow.<br><color_y>Range: +{t5}m<br>Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '1.60'],
			'{t6}': [null, '5']
		}
	},
	"1409": {
		name: "Eagle Dive (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Air Pounce Lv. 1<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Leap backwards after smashing down on an enemy from the air. This skill also activates when you use a regular attack after a aerial regular attack or after <color_y>Airwalk</color_y><color_w>. <br></color_w><color_y>Must be airborne<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '152', '154', '156', '159', '162', '184', '188', '192', '208', '214', '250', '259', '267', '276', '285', '323', '327', '332', '336', '341']
		}
	},
	"1204": {
		name: "Arrow Barrage (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rain of Arrows Lv. 1<br>Archer SP Total 45 or above<br>SP {t4}",
			'effect': "Instantly and rapidly fires powerful arrows.<br><color_y>Damage (per Arrow): {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '59', '71']
		}
	},
	"1411": {
		name: "Somersault Dance (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Marionette Lv. 1<br>Somersault Kick Lv. 1<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': " Press the special attack button after <color_y>Somersault Kick</color_y><color_w> to keep kicking airborne enemies. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '162', '168', '174', '183', '190', '231', '241', '252', '263', '273', '320', '332', '342', '350', '358', '405', '414']
		}
	},
	"1003": {
		name: "Multi Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires 7 arrows at enemies in a frontal cone. Enemies close to you take more damage.<br><color_y>Damage per Arrow: {t5}% + {1}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '12', '13', '14', '15', '16', '18', '19', '21', '22', '23', '29', '31', '32', '40', '44', '53', '57', '60', '63', '66', '76', '78', '80', '82', '84', '94', '96', '98']
		}
	},
	"1023": {
		name: "Power Tumble (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tumble Lv. 1<br>SP {t4}",
			'effect': "Allows you to evade enemy attacks with <color_y>[Tumble]</color_y><color_w> even when paralyzed. <br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['10'],
			'{t4}': ['5'],
			'{t5}': [null, '20']
		}
	},
	"1414": {
		name: "Falling Star (PVP)",
		changeskill: "1420",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cyclone Kick Lv. 1<br>Archer SP Total 45 or above<br>SP {t4}",
			'effect': "Jump into the air and then slam into the ground with great force, unleashing a powerful quake that knocks down enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '851', '1002']
		}
	},
	"1556": {
		name: "Cyclone Kick EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cyclone Kick Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Cyclone Kick's damage, attack speed, and range. Also allows the skill to hit knocked-down enemies.<br><color_y>Cyclone Kick Damage: +{t5}%<br>Cyclone Kick Attack Speed: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30']
		}
	},
	"1018": {
		name: "Somersault Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button next to a stunned enemy to launch the enemy back with a kick. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['8'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"1404": {
		name: "Spiral Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "Press the special attack button during <color_y>Tumble</color_y><color_w> to dash forward and perform a spinning attack. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '96', '100', '105', '109', '115', '141', '151', '157', '164', '184', '224', '238', '249', '260', '272', '322', '330', '338', '346', '354', '401']
		}
	},
	"1208": {
		name: "Frag Arrow (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow, Crossbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Fires a powerful magic arrow that splits into 6 piercing arrows upon contact. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '66', '67', '69', '71', '73', '85', '90', '92', '95', '105', '125', '132', '137', '143', '148', '174', '177', '179', '181', '184', '207']
		}
	},
	"1218": {
		name: "Longbow Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bow",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "Increases attack range and damage when using a longbow.<br><color_y>Range: +{t5}m<br>Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '2.50'],
			'{t6}': [null, '5.0']
		}
	},
	"1503": {
		name: "Hurricane Dance (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Untouchable Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Kick the enemy in front of you so hard that all of their skills are nullified, then launch into a powerful combo attack.<br><color_y>Damage {t5}%<br>Ignores invincibility and block<br>Cannot use skills for 1 seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '345', '361', '378', '396', '407', '474', '483', '492', '502', '530', '555', '577', '598'],
			'{t6}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5']
		}
	},
	"1307": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Damage is increased by <color_y>{t5}%</color_y><color_w>. Obtain a </color_w><color_y>Wind Arrow</color_y><color_w> when dealing critical damage with </color_w><color_y>certain skills</color_y><color_w>. The total damage of Arrow Barrage will also be increased by </color_w><color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '25']
		}
	},
	"1403": {
		name: "Blooming Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spiral Kick Lv. 1<br>Eagle Dive Lv. 1<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "You move slightly forward to perform a roundhouse kick, which knocks down enemies. This skill also activates when you use a special attack after a <color_y>Spin Kick</color_y><color_w>. <br></color_w><color_y>Damage: {t5}%<br>Stun Chance: {t6}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '76', '83', '95', '103', '130', '171', '188', '205', '215', '223', '262', '271'],
			'{t6}': [null, '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', '100%', '100%', '100%', '100%']
		}
	}
});