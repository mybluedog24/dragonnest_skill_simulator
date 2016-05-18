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
		name: "Siege Stance",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '537', '545', '553', '561', '569', '635', '643', '651', '659', '667', '732', '741', '749', '757', '765', '830', '838']
		}
	},
	"1207": {
		name: "Rain of Arrows",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '28', '29', '31', '33', '35', '44', '45', '47', '49', '51', '60', '61', '63', '65', '67']
		}
	},
	"1026": {
		name: "Piercing Shot",
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
			'{t5}': [null, '68', '71', '75', '79', '82', '114', '119', '123', '127', '131', '166', '171', '175', '179', '183', '218', '223', '227', '231', '235', '270', '275', '279', '283', '287', '323', '327', '331', '335']
		}
	},
	"1359": {
		name: "Class Mastery II",
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
		name: "Ankle Shot",
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
			'{t6}': [null, '109', '115', '121', '127', '133', '166', '172', '178', '184', '190', '223']
		}
	},
	"1215": {
		name: "Walking Target",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 25 or above<br>SP {t4}",
			'effect': "Discharges energy that allows you to see an enemy's weaknesses. Increases the damage that you deal to an enemy for a while.<br><color_y>Damage: {t5}%<br>Physical Damage: +{t6}%<br>Magic Damage: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '53', '56', '58', '60', '63', '73', '76', '78'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t8}': [null, '60', '60', '60', '60', '60', '60', '60', '60']
		}
	},
	"1357": {
		name: "Class Mastery",
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
			'{t5}': [null, '10']
		}
	},
	"1031": {
		name: "Attuned Mind",
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
		name: "Wisdom of the Owl",
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
			'{t2}': ['120', '120'],
			'{t3}': ['12'],
			'{t4}': ['10'],
			'{t5}': [null, '28'],
			'{t6}': [null, '90']
		}
	},
	"1303": {
		name: "Deathbloom",
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
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['10', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '362', '370', '379', '388', '396', '443', '452', '460', '469', '478', '524', '533', '542'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t8}': [null, '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
		}
	},
	"1210": {
		name: "Rapid Shot",
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
			'{t5}': [null, '160', '163', '166', '170', '173', '200', '203', '206', '210', '213', '240', '243', '246', '250', '253', '280', '283', '287']
		}
	},
	"1402": {
		name: "Marionette",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kick Shot Lv. 1<br>Archer SP Total 30 or above<br>SP {t4}",
			'effect': "<color_y>(Physical Attack)<br></color_y><color_w>Fire a grappling arrow that pierces enemies within the target cone, then reel them in for a chance to use </color_w><color_y>Somersault Kick</color_y><color_w> for an additional 50% damage.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '370', '381', '392', '403', '414', '503', '514', '525', '536', '546', '636', '647', '658', '668', '679', '769', '780', '790', '801']
		}
	},
	"1205": {
		name: "Fake Shot",
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
			'{t5}': [null, '78', '81', '84', '88', '91', '142', '149', '156', '162', '169', '230', '236', '243']
		}
	},
	"1028": {
		name: "High Spin Kick",
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
			'{t5}': [null, '101', '104', '107', '110', '113', '129', '132', '135', '138', '140', '156', '159', '162', '165', '168', '183', '186', '189', '192', '195', '211', '214', '216']
		}
	},
	"1354": {
		name: "Rapid Shot EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Rapid Shot Lv. 1<br>Frag Arrow EX Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances Rapid Shot to auto-fire explosive arrows.<br></color_w><color_y>Critical Resist: -{t5}%<br>Duration {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '20'],
			'{t6}': [null, '10']
		}
	},
	"1301": {
		name: "Lucky Shot",
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
			'{t5}': [null, '50'],
			'{t6}': [null, '75']
		}
	},
	"1415": {
		name: "Counter Ring Shot",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '151', '158', '164', '170', '177', '206', '213', '219', '226', '232', '262'],
			'{t6}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3']
		}
	},
	"1356": {
		name: "Guided Missiles EX",
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
			'{t6}': [null, '150'],
			'{t7}': [null, '30'],
			'{t8}': [null, '5'],
			'{t9}': [null, '5']
		}
	},
	"1013": {
		name: "Tumble",
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
		name: "Health Bolster",
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
		name: "Stunning Shot",
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
			'{t5}': [null, '204', '218', '233', '248', '263', '330', '345', '360', '374', '389', '457', '471'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"1506": {
		name: "Furious Winds EX",
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
		name: "Tumbling Shot",
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
			'{t5}': [null, '81', '83', '84', '86', '88', '127', '130', '133', '137', '140', '186', '189', '192', '195', '198', '244', '247', '250', '254']
		}
	},
	"1557": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Damage after using Air Pounce or Eagle Dive. Also resets the cooldown of <color_y>Falling Star</color_y><color_w> if you stay in the air for {t5} secs.<br></color_w><color_y>Duration: {t6} sec<br> Damage +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '3'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"1211": {
		name: "Hawk Ballista",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '3519', '6321']
		}
	},
	"1509": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Nature's Rage Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Kick Shot</color_y><color_w>, </color_w><color_y>Astral Illusion</color_y><color_w> temporarily becomes an instant skill while being invincible. <br><br></color_w><color_y>Damage +{t5}% <br>Astral Illusion and Instant share cooldown</color_y>",
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
		name: "Spirit Boost",
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
			'{t2}': ['44', '44'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '22'],
			'{t6}': [null, '40'],
			'{t7}': [null, '40']
		}
	},
	"1203": {
		name: "Guided Missiles",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '114', '118', '120', '124', '127', '146', '150', '154', '158', '161', '180', '184', '188', '192', '195']
		}
	},
	"1551": {
		name: "Show Time!",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Falling Star Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Quickly recovers the cooldown of all <color_y>passive </color_y><color_w>skills by {t5}%. Also enhances </color_w><color_y>Falling Star</color_y><color_w>.<br></color_w><color_y>Duration: {t6} sec<br>Cooldown: {t7} sec<br>Increases Falling Star damage by {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '90'],
			'{t6}': [null, '30'],
			'{t7}': [null, '90'],
			'{t8}': [null, '100']
		}
	},
	"1407": {
		name: "Cyclone Kick",
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
			'{t5}': [null, '1140', '1181', '1221', '1262', '1303', '1521', '1562', '1603', '1643', '1684', '1902', '1943', '1984', '2025', '2065']
		}
	},
	"1413": {
		name: "Nature's Rage",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '50', '50'],
			'{t6}': [null, '50', '50'],
			'{t7}': [null, '6243', '7503']
		}
	},
	"1008": {
		name: "Willow Kick",
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
			'{t5}': [null, '<color_y>(Physical Attack)<br></color_y><color_w>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 107%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Physical Attack)<br></color_y><color_w>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 111%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Physical Attack)<br></color_y><color_w>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 115%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Physical Attack)<br></color_y><color_w>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 120%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Physical Attack)<br></color_y><color_w>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 124%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 147%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 151%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 156%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 160%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 164%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 243%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 248%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 254%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 259%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 264%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 295%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 300%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>', '<color_y>(Physical Attack)</color_y><color_w> <br>Spin and kick nearby enemies with both feet. The last kick launches enemies into the air.<br></color_w><color_y>Damage: 306%<br><br>Increases vortex effect range for enemies.<br>Additional Damage: 25%</color_y>']		}
	},
	"1351": {
		name: "Ward of the Spirits",
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
		name: "Mental Fortitude",
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
		name: "Spiritual Focus",
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
			'{t6}': [null, '27.0']
		}
	},
	"1302": {
		name: "Charged Shot EX",
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
			'{t8}': [null, '100']
		}
	},
	"1311": {
		name: "시즈 스탠스 EX 인스턴트",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1508": {
		name: "Hurricane Dance EX",
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
		name: "Ring Shot",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '447', '457', '466', '475', '485', '562', '571', '580', '589', '599', '676', '685', '694', '704', '713', '790', '799'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3']
		}
	},
	"1507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Damage after using Kick Shot or Somersault Dance. Also decreases Cooldown of <color_y>Nature's Rage</color_y><color_w> when hitting the enemy with a </color_w><color_y>physical attack</color_y><color_w>. Cooldown decreases every time you use a skill.<br></color_w><color_y>Duration: {t5} sec<br>Damage +{t6}%<br></color_y><color_y>Decreases Physical Skill Cooldown by {t7} sec per attack</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '20']
		}
	},
	"1001": {
		name: "Twin Shot",
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
			'{t5}': [null, '67', '69', '71', '73', '75', '83', '85', '87', '89', '90', '99', '100', '101', '103', '104', '109', '110', '111', '112', '113', '118', '119', '120', '121', '123', '128', '129', '130', '131']
		}
	},
	"1553": {
		name: "Rising Storm",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1137', '1168', '1198', '1228', '1259', '1421', '1451', '1482', '1512', '1542', '1705', '1735', '1766']
		}
	},
	"1308": {
		name: "Deathbloom EX",
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
		name: "Charged Shot",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '550', '564', '578', '592', '607', '722', '736', '750', '765', '779', '894', '909', '923', '937', '951', '1067', '1081', '1095', '1109', '1123', '1239']
		}
	},
	"1202": {
		name: "Aerial Chain Shot",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '71', '73', '75', '77', '78', '104', '105', '107', '108', '110', '133', '135', '136', '138', '139', '162', '164', '166', '167', '169']
		}
	},
	"1554": {
		name: "Eagle Dive EX",
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
		name: "Pin Wheel",
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
			'{t2}': ['12', '12'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"1209": {
		name: "Swift Shot",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '328', '336', '343', '350', '357', '416', '423', '431', '438', '445', '504', '511', '519', '526', '533', '592', '599', '606', '614', '621']
		}
	},
	"1017": {
		name: "Spin Kick",
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
		name: "페이탈 가이디드 샷",
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
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"1019": {
		name: "Low Spin Kick",
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
			'{t5}': [null, '135']
		}
	},
	"1305": {
		name: "Siege Stance EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Siege Stance Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the range and damage of Siege Stance. Scatter {t5} small arrows in front of you by pressing the special attack button instead of the regular attack button. These arrows have a short range and deal {t6}% damage per arrow. Obtain a <color_y>Wind Arrow</color_y><color_w> when dealing critical damage with Siege Stance.<br></color_w><color_y>Siege Stance Damage: +{t7}%<br>Damage taken during Siege Stance: -{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '15'],
			'{t7}': [null, '20'],
			'{t8}': [null, '80']
		}
	},
	"1212": {
		name: "Spiritual Focus",
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
			'{t6}': [null, '27.0'],
			'{t7}': [null, '27.0']
		}
	},
	"1219": {
		name: "Crossbow Mastery",
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
			'{t6}': [null, '11.7']
		}
	},
	"1552": {
		name: "Spiral Kick EX",
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
		name: "Sylph's Aid",
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
			'{t2}': ['44', '44'],
			'{t3}': ['28'],
			'{t4}': ['10'],
			'{t5}': [null, '22'],
			'{t6}': [null, '30'],
			'{t7}': [null, '25.0']
		}
	},
	"1405": {
		name: "Kick Shot",
		d1: {
			'lvl': '{n}',
			'weapon': "Shortbow",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Archer SP Total 20 or above<br>SP {t4}",
			'effect': "<color_y>(Physical Attack)<br></color_y><color_w>Kicks enemies into the air before peppering them with arrows. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '478', '490', '502', '514', '526', '623', '635', '647', '659', '671', '768', '780', '792', '803', '815', '912', '924', '936', '948', '960', '1057']
		}
	},
	"1310": {
		name: "Class Mastery II",
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
		name: "Aerial Chain Shot EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"1230": {
		name: "Windforce",
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
		name: "Moon Kick",
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
			'{t5}': [null, '135']
		}
	},
	"1504": {
		name: "Marionette EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"1501": {
		name: "Untouchable",
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
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '60']
		}
	},
	"1502": {
		name: "Kick Shot EX",
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
		name: "Aerial Evasion",
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
		name: "Rising Storm EX",
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
		name: "Rain of Arrows EX",
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
		name: "Detonating Arrow",
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
			'{t2}': ['34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34', '34'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '377', '386', '394', '403', '411', '457', '465', '474', '482', '491', '536', '545', '553'],
			'{t7}': [null, '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5']
		}
	},
	"1505": {
		name: "Somersault Dance EX",
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
		name: "Butterfly Float",
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
			'{t2}': ['4', '4', '3', '2', '1'],
			'{t3}': ['36', '46', '56', '66'],
			'{t4}': ['1', '1', '1', '1'],
			'{t5}': [null, '4', '3', '2', '1']
		}
	},
	"1555": {
		name: "Blooming Kick EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"1406": {
		name: "Furious Winds",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Somersault Dance Lv. 1<br>Archer SP Total 40 or above<br>SP {t4}",
			'effect': "<color_y>(Physical Attack)<br></color_y><color_w>Call upon a powerful vortex of wind to perform consecutive attacks on enemies within range. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '932', '973', '1014', '1055', '1097', '1290', '1331', '1372', '1414', '1455', '1648', '1689', '1731', '1772', '1813']
		}
	},
	"1417": {
		name: "Chain Tumble",
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
			'{t2}': ['15', '15', '12', '9', '7', '6', '5', '4', '3'],
			'{t3}': ['20', '30', '40', '50', '60', '70', '80', '90'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '15', '12', '9', '7', '6', '5', '4', '3']
		}
	},
	"1355": {
		name: "Swift Shot EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swift Shot Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Enhances Swift Shot to fire more arrows. After casting the skill, press the regular attack button to launch an additional attack. Use the skill while moving backwards to fire arrows at targets from Frag Core. Firing at the target refreshes its duration. Cannot launch additional attack at that time.<br></color_w><color_y>Additional Hit Damage: {t5}% of Swift Shot</color_y>",
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
		name: "Air Pounce",
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
			'{t6}': [null, '153', '155', '157', '159', '161', '179', '181', '183', '186', '188', '206', '208', '210', '212', '214', '232', '234', '236', '239', '241', '259']
		}
	},
	"1559": {
		name: "Class Mastery II",
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
		name: "Cyclone Kick EX Instant",
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
		name: "Spirit Shot",
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
			'{t5}': [null, '87', '89', '91', '94', '96', '124', '126', '128', '130', '132', '160', '161', '163', '165', '167', '195', '197', '199', '201', '203']
		}
	},
	"1420": {
		name: "Enhanced Quake Barrage",
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
		name: "Magic Arrow",
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
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 104%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 106%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 109%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 111%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 114%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 142%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 144%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 147%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 149%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 151%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 219%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 222%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 225%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 228%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 231%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 268%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 271%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 274%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 277%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 280%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 317%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 320%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 323%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 326%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 330%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 366%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>', '<color_y>(Magic Arrow)<br></color_y><color_w>Fires a magical arrow that creates a small explosion on contact.<br></color_w><color_y>Damage: 369%<br><br>Penetrates enemies, creating a line of small explosions.<br>Addtional Damage: 25%</color_y>']		}
	},
	"1352": {
		name: "Frag Arrow EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frag Arrow Lv. 1<br>Sharpshooter SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Magic Arrow)<br></color_y><color_w>Increases the damage of Frag Arrow and penetrates enemies. Explodes on contact, creating a target that attracts extra attacks from Swift Shot. Can have up to {t5} Frag cores at a time.<br></color_w><color_y>Frag Arrow Damage: +{t6}%<br>Splintered Arrow Damage: +{t7}%<br>Frag Core Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '1'],
			'{t6}': [null, '30'],
			'{t7}': [null, '20'],
			'{t8}': [null, '60']
		}
	},
	"1032": {
		name: "Fury of the Owl",
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
		name: "Detonating Arrow EX",
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
			'{t5}': [null, '3']
		}
	},
	"1510": {
		name: "Astral Illusion Instant",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Astral Illusion can be used quickly and is invincible.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['0', '0'],
			'{t5}': [null, '', '']
		}
	},
	"1419": {
		name: "Shortbow Mastery",
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
			'{t6}': [null, '19.5']
		}
	},
	"1409": {
		name: "Eagle Dive",
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
			'{t5}': [null, '450', '458', '466', '474', '482', '548', '556', '564', '572', '580', '645', '654', '662', '670', '678', '743', '751', '760', '768', '776']
		}
	},
	"1204": {
		name: "Arrow Barrage",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '141', '181']
		}
	},
	"1411": {
		name: "Somersault Dance",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Marionette Lv. 1<br>Somersault Kick Lv. 1<br>Archer SP Total 35 or above<br>SP {t4}",
			'effect': "<color_y>(Physical Attack)<br></color_y><color_w>Press the special attack button after </color_w><color_y>Somersault Kick</color_y><color_w> to keep kicking airborne enemies. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '514', '540', '566', '593', '619', '743', '769', '795', '821', '848', '971', '998', '1024', '1050', '1076', '1200', '1226']
		}
	},
	"1003": {
		name: "Multi Shot",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '21', '21', '22', '23', '29', '30', '31', '32', '33', '38', '39', '40', '41', '42', '48', '49', '50', '51', '52', '57', '58', '59', '60', '61', '67', '68', '69']
		}
	},
	"1023": {
		name: "Power Tumble",
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
		name: "Falling Star",
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
			'{t5}': [null, '4126', '4237']
		}
	},
	"1556": {
		name: "Cyclone Kick EX",
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
		name: "Somersault Kick",
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
			'{t5}': [null, '135']
		}
	},
	"1404": {
		name: "Spiral Kick",
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
			'{t5}': [null, '240', '250', '260', '271', '281', '343', '353', '364', '374', '384', '446', '457', '467', '477', '488', '550', '560', '571', '581', '591', '653']
		}
	},
	"1208": {
		name: "Frag Arrow",
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
			'{t5}': [null, '146', '148', '150', '152', '154', '170', '172', '174', '176', '178', '194', '195', '197', '199', '201', '217', '219', '221', '223', '225', '241']
		}
	},
	"1218": {
		name: "Longbow Mastery",
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
			'{t6}': [null, '11.7']
		}
	},
	"1503": {
		name: "Hurricane Dance",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Untouchable Lv. 1<br>Acrobat SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Physical Attack)<br></color_y><color_w>Kick the enemy in front of you so hard that all of their skills are nullified, then launch into a powerful combo attack.<br></color_w><color_y>Damage {t5}% +<br>Ignores block<br>Cannot use skills for 2 seconds</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '705', '723', '740', '757', '775', '868', '885', '903', '920', '938', '1031', '1048', '1065']
		}
	},
	"1307": {
		name: "Class Mastery",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '50']
		}
	},
	"1403": {
		name: "Blooming Kick",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '489', '526', '562', '599', '636', '804', '840', '877', '914', '950', '1118', '1155'],
			'{t6}': [null, '100%', '100%', '100%', '100%', '100%', '100%', '100%', '100%', '100%', '100%', '100%', '100%']
		}
	}
});