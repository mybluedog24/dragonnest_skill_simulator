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
	"4417": {
		name: "Contagion (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Injection Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Tosses a flask of fatal poison at the target.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Poison Attacks: {t6}<br>Damage per Poison: {t7}%<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '92', '98', '103', '114', '133', '163', '175', '187', '197', '202', '229', '234'],
			'{t6}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4309": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lock and Load EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Chemical Grenade</color_y><color_w>, </color_w><color_y>Lock and Load EX</color_y><color_w> can be used to load more bullets. <br><br></color_w><color_y>Damage +{t5}% <br>Lock and Load doesn't share cooldown with Instant</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"4560": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Toxic Spill EX Lv. 1<br>SP {t4}",
			'effect': "When you use<color_y>Toxic Twirl</color_y><color_w>, gain {t5} additional Bubble(s) and </color_w><color_y>Toxic Spill EX</color_y><color_w> temporarily becomes an instant skill. <br><br></color_w><color_y>Damage +{t6}% <br>Toxic Spill and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '1'],
			'{t6}': [null, '5']
		}
	},
	"4203": {
		name: "Gravity Grenade (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Throws a grenade that creates a gravity well that pulls enemies in.<br><color_y>Dark Magic<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '218', '230', '241', '256', '269', '336', '355', '372', '389', '400', '459', '470', '481']
		}
	},
	"4222": {
		name: "Napalm (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Launches a fire grenade that explodes and engulfs enemies within 3m in flames.<br><color_y>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '41', '43', '46', '48', '50', '62', '64', '67', '71', '73', '86', '95', '99', '103', '121', '150', '158', '166', '174', '182', '214', '217', '219', '222', '224', '253', '256', '258', '261'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4552": {
		name: "Injection EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Injection Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Injection's range and damage.<br><color_y>Injection Damage +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"4301": {
		name: "Splash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bullet Barrage Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Fires {t5} cannonballs in a fan formation.<br></color_w><color_y>Damage per Shot: {t6}%nUse {t7} bullets<br>Fanning possible</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '114', '116', '117', '118', '119', '124', '125', '126', '128', '129', '136', '138', '140', '143'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"4418": {
		name: "Poison Pop (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Twirl  Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Launch a gigantic poison bubble in an arc to splash down on enemies. Poisons any enemies in range.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Poison Attacks: {t6}<br>Magic Damage per Poison: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '241', '263', '278', '331', '365', '472', '507', '525', '531', '538', '636'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4306": {
		name: "Chemical Warfare EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chemical Warfare Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Chemical Warfare to explode again after the initial explosion, weakening enemy defense.<br><color_y>Bonus Explosion Damage: {t5}% of Chemical Warfare damage<br>Incoming Damage: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"4413": {
		name: "Frost Fangs (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Element Enthusiast Lv. 1<br>Tinkerer SP Total 45 or above<br>SP {t4}",
			'effect': "Summons red crystals that freeze enemies, dealing massive damage. Using more bubbles increases the explosion's radius and damage.<br><color_y>Ice Magic<br>Damage: {t5}%<br>Action Speed: -{t6}%<br>Duration: {t7} sec<br>Burn Damage: {t9} every 2 seconds for {t8} sec<br>Using {t10} Bubbles<br> Radius +{t11}m, Damage +{t12}%<br>Using {t13} Bubbles<br> Radius +{t14}m, Damage +{t15}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '627', '732'],
			'{t6}': [null, '20', '20'],
			'{t7}': [null, '4', '4'],
			'{t8}': [null, '4', '4'],
			'{t9}': [null, '1423', '2134'],
			'{t10}': [null, '3', '3'],
			'{t11}': [null, '4', '4'],
			'{t12}': [null, '25', '25'],
			'{t13}': [null, '5', '5'],
			'{t14}': [null, '5', '5'],
			'{t15}': [null, '50', '50']
		}
	},
	"4004": {
		name: "Wrench Whomp (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Smash the enemy with a giant wrench by pressing the special attack button.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"4213": {
		name: "Piping Hot Alfredo (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alfredo Smash Lv. 1<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Boosts Alfredo's Action Speed, Movement Speed, and Damage while lowering damage taken.<br>Action Speed: +{t5}%<br>Movement Speed: +{t6}%<br>Damage Dealt: +{t7}%<br>Damage Received: -{t8}%<br>Duration: {t9} sec",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['22', '32', '42', '52', '62', '72', '82'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '40', '40', '40', '40', '40', '40', '40'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '40', '40', '40', '40', '40', '40', '40'],
			'{t8}': [null, '5', '10', '15', '20', '25', '30', '35'],
			'{t9}': [null, '10', '15', '20', '25', '30', '35', '40']
		}
	},
	"4357": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "<br>Increases Critical Chance when <color_y>Mechanic Mode</color_y><color_w> is cast.<br></color_w><color_y>Duration: {t5} sec<br>Critical Chance: +{t6}%<br>Internal Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '30']
		}
	},
	"4508": {
		name: "Ice Beam EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Beam Lv. 1<br>SP {t4}",
			'effect': "Enhances Ice Beam. Duration of Ice Beam increases. <color_y>Left-click</color_y><color_w> to shoot Ice Bombs while firing the Ice Beam. <br></color_w><color_y>Additional Damage: {t5}%<br></color_y><color_y>Ice Bomb Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '50']
		}
	},
	"4212": {
		name: "Alfredo Smash (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alfredo Drop Lv. 1<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Commands Alfredo to use Stomp. Enemies within {t5} range take damage. Taunts enemies in a {t6}m radius.<br><color_y>Damage: {t7}%<br>Taunt Duration: {t8} sec </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t6}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t7}': [null, '158', '160', '162', '165', '167', '183', '185', '188', '190', '192', '208', '210', '213'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4355": {
		name: "Quack Patrol EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quack Patrol Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Quack Patrol's range. Robo-quackums will become frenzied.<br><color_y>Robo-quackum Movement Speed: +{t6}% for {t5} sec<br>Quack Patrol Damage: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '4'],
			'{t6}': [null, '30'],
			'{t7}': [null, '30']
		}
	},
	"4218": {
		name: "Kami-quackum (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quack Patrol Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Commands robo-quackum to chase a nearby enemy and explode.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '225', '233', '240', '248', '256', '297', '305', '313', '320', '328', '370', '377', '385', '393', '401']
		}
	},
	"7303": {
		name: "Cannon Blaster (PVP)",
		changeskill: "7309",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Launches land mines from your cannon that explode {t5} sec after being placed.<br><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '116', '117', '118', '119', '121', '123', '128', '129', '131', '142', '155', '162', '166', '171', '175', '194', '200', '206', '213', '220', '248']
		}
	},
	"4201": {
		name: "Super Ball (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Fires a round that bounces from enemy to enemy. If no additional enemies are in range, deals extra damage based on the number of bounces left.<br></color_w><color_y>Damage: {t5}%<br>Bounces: {t6}<br>Extra Damage per Unused Bounce: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '142', '144', '146', '148', '151', '167', '174', '178', '182', '198', '229', '240', '248', '256', '264', '308', '310', '312', '314', '316', '355'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', '11']
		}
	},
	"4557": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "After gaining an Alchemy Bubble from poison or healing skills, gain <color_y>{t6}%</color_y><color_w> damage for </color_w><color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Damage: +{t6}%<br>Creates {t7} more Bubbles when more Injection is used.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '5'],
			'{t7}': [null, '1']
		}
	},
	"4015": {
		name: "Alfredo Drop (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons Alfredo the Robot Butler to fight by your side. Alfredo's stats are identical to yours and his HP is a percentage of your Max HP.<br><color_y>HP: {t5}% of your Max HP<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45'],
			'{t3}': ['12', '22', '32'],
			'{t4}': ['3', '1', '1'],
			'{t5}': [null, '20', '25', '30'],
			'{t6}': [null, '45', '45', '45']
		}
	},
	"4204": {
		name: "Chemical Warfare (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Make It Rain Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Fires a powerful biochemical missile.<br></color_w><color_y>Damage: {t5}%<br>Uses {t6} bullet</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '349', '405', '501', '562', '614', '805', '852', '873', '894', '915'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4353": {
		name: "Gigaton Quack (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chainsaw Quackum Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a giant robo-quackum. The robo-quackum grows in three stages; the bigger the stage, the higher the damage. Launch the quackum by pressing the regular attack button.<br><color_y>Damage: {t5}%<br>1st Stage Damage: {t6}%<br>2nd Stage Damage: {t7}%<br>3rd Stage Damage: {t8}%<br>Incoming Damage: +{t9}%<br>Duration: {t10} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '549', '574', '599', '623', '641', '747', '761', '776', '790', '805', '910', '925', '939'],
			'{t6}': [null, '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t10}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7305": {
		name: "Mechanic Cannon (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Shoots an explosive cannonball.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '117', '117', '117', '119', '120', '129', '131', '133', '135', '137', '147', '149', '152', '154', '157', '171', '175']
		}
	},
	"4405": {
		name: "Slime Surge (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Summons slime. The number of bubbles used will grant the slime different skills.<br><color_y>Direct Attack - Damage {t5}%<br><br>Slime Skills:<br>Punch - Damage {t6}%<br>Fire Attack - Damage: {t7}%<br>Ice Attack - Damage: {t8}%<br>Poison Attack - Damage: {t9}%<br><br>{t10} Bubbles Used - Basic and Fire Attack<br>{t11} Bubbles Used - Ice Attack Added<br>{t12} Bubbles Used - Poison Attack Added<br>Duration: {t13} sec<br>Summon up to {t14}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '39.2', '38.4', '37.6', '36.8', '36', '35.2', '34.4'],
			'{t3}': ['18', '28', '38', '48', '58', '68', '78', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '125', '140', '160', '194', '219', '234', '247', '259'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t7}': [null, '140', '140', '140', '140', '140', '140', '140', '140'],
			'{t8}': [null, '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t9}': [null, '200', '200', '200', '200', '200', '200', '200', '200'],
			'{t10}': [null, '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t11}': [null, '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t12}': [null, '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t13}': [null, '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t14}': [null, '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4302": {
		name: "Super Ball EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Super Ball Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Super Ball's damage and bounce count. Bounces deal more damage. <br><color_y>Super Ball Damage: +{t5}%<br>Bounces: +{t6} <br>Bonus Bounce Damage: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '20'],
			'{t6}': [null, '1'],
			'{t7}': [null, '2']
		}
	},
	"4216": {
		name: "Quackum Crash (PVP)",
		changeskill: "4360",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Fires a metal egg at the enemy to summon robo-quackum.<br><color_y>Damage: {t5}%<br></color_y><color_y>HP: {t6}% of your Max HP<br>Duration: {t7} sec<br>Summon up to {t8}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '200', '201', '202', '203', '204', '206', '207', '208', '209', '210', '211', '212', '213', '214'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4409": {
		name: "Volcano Punch  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Summons a magma fist to scorch enemies in front of you. Burns targets. Follow up with additional normal attacks to trigger Frosty Fist.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn {t7}%<br>Elemental Resist: -{t8}%<br>Duration: {t9} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '92', '94', '96', '98', '102', '120', '128', '132', '136', '154', '187', '200', '209', '218', '226', '273', '275', '277', '279', '281', '321'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"4207": {
		name: "Gatling Quacker (PVP)",
		changeskill: "7308",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Summons a machine gun tower manned by a robo-quackum.<br><color_y>Damage: {t5}%}<br>HP: {t6}% of your Max HP<br>Duration: {t7} sec<br>Summon up to {t8} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '92', '96', '100', '103', '107', '131', '135', '139', '143', '147', '170', '174', '178', '182', '186', '209', '213', '217', '221', '225', '248'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4403": {
		name: "Bubble Brain (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 40 or above<br>SP {t4}",
			'effect': "Enhances your Intellect based on the number of Bubbles you have.<br><color_y>INT +{t5}% per bubble<br>Physical Damage Taken: -{t6}% per Bubble<br>Magic Damage Taken: -{t7}% per Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['26'],
			'{t4}': ['3'],
			'{t5}': [null, '1'],
			'{t6}': [null, '1.5'],
			'{t7}': [null, '1.5']
		}
	},
	"4009": {
		name: "Bombs-a-daisy (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while jumping to toss a grenade.<br>Damage: {t5}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['3'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"4354": {
		name: "Quack Shock EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quack Shock Lv. 1<br>Quackum Crash EX Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the damage and range of Quack Shock.<br><color_y>Quack Shock Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"4412": {
		name: "Element Enthusiast (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ground Zero Lv. 1<br>Arctic Squish Lv. 1<br>Tinkerer SP Total 40 or above<br>SP {t4}",
			'effect': "Grants a {t5}% chance to gain bonus Alchemy Bubbles when using bubble-granting fire and ice skills.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['1'],
			'{t5}': [null, '100']
		}
	},
	"4509": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ice Beam EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use<color_y>Frosty Fist</color_y><color_w>, </color_w><color_y>Ice Beam +</color_y><color_w> temporarily becomes an instant skill with a larger range. <br><br></color_w><color_y>Damage +{t5}% <br>Ice Beam and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '5']
		}
	},
	"7304": {
		name: "Mechanic Mode (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kami-quackum Lv. 1<br>SP {t4}",
			'effect': "Changes to Mechanic Mode. Tower-summoning skills become attack skills, Damage increases, and damage received decreases.<br><color_y>Damage: +{t5}%<br>Damage Taken: -{t6}%<br></color_y><color_r>Unable to use Lock and Load or Shooting skills in Mechanic Mode.</color_r>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '6.4', '8', '9.6', '11.2', '12.8', '14.4', '16', '17.6', '19.2', '20.8', '22.4', '24', '25.6', '27.2'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4507": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "After gaining an Alchemy Bubble from fire or ice skills, gain <color_y>{t6}%</color_y><color_w> damage for </color_w><color_y>{t5} sec</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '5']
		}
	},
	"4559": {
		name: "Lock and Load EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Super Ball EX Lv. 1<br>Lock and Load Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "After loading, cooldown for Cannon Blaster changes to {t5} seconds and Shooting Skills deal 30% more damage.<br><color_y><br>Lock and Load has increased knock-up range.<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '5']
		}
	},
	"4019": {
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
	"4005": {
		name: "Slip and Slide (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Wax the ground around you, causing enemies to slip and allies to move faster.<br><color_y>Knock-down Chance: {t5}%<br>Movement Speed: +{t6}%<br>Duration: {t7} sec<br>Cooldown: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['6', '16', '26', '36', '46', '56', '66', '76', '86', '96'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '33', '33', '33', '33', '33', '33', '33', '33', '33', '33']
		}
	},
	"4307": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Damage increases <color_y>{t5}%</color_y><color_w> and Alfredo's HP increases by </color_w><color_y>{t6}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '10']
		}
	},
	"7306": {
		name: "Mechanic Ice Pump (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Step on the ice pump's bullets to burst them and deal Ice Damage to nearby enemies.<br><color_y>Damage: {t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '144', '148', '151', '155', '159', '173', '177', '181', '185', '189', '206'],
			'{t6}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4']
		}
	},
	"4555": {
		name: "Toxic Twirl EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Twirl  Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Toxic Swirl to deal additional damage. Press the regular attack button to activate. Roto-whirl can be used even after the extra attack.<br><color_y>Additional Hit Damage: {t5}% of Toxic Twirl damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"4551": {
		name: "Lovesick (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Surge Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Infects enemies with a disease that confuses them. Confused enemies deal reduced damage, take extra magic damage, and can take damage from other enemies.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Magic Damage +{t6}%<br>Duration: {t7} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '266', '297', '320', '344', '348', '414', '418', '423', '427', '431'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6']
		}
	},
	"4360": {
		name: "포스 아웃 인스턴트 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "회피용도로도 사용할 수 있는 포스 아웃입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4414": {
		name: "Toxic Twirl  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roto-whirl Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Spews poison gas all around you. Use a special attack while dodging to trigger this skill. You can dodge again immediately when landing.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Poison Attacks: {t6}<br>Damage per Poison: {t7}%<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '87', '89', '91', '94', '96', '118', '121', '125', '139', '144', '178', '185', '192', '199', '206', '240', '242', '265', '282', '300'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4420": {
		name: "Toxic Surge (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chemical Cavorter Lv. 1<br>Tinkerer SP Total 45 or above<br>SP {t4}",
			'effect': "Consumes all of your alchemy bubbles to create a massive pool of poison. The more bubbles you have, the more damage the poison will do.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Poison Duration: {t6} sec<br>Poison every 2 sec, causing {t7} Damage.<br>{t8} Bubbles Used<br>Damage +{t9}%<br>{t10} Bubbles Used<br>Damage +{t11}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '782', '918'],
			'{t6}': [null, '11', '11'],
			'{t7}': [null, '713', '1070'],
			'{t8}': [null, '3', '3'],
			'{t9}': [null, '40', '40'],
			'{t10}': [null, '5', '5'],
			'{t11}': [null, '80', '80']
		}
	},
	"4558": {
		name: "Good Vibrations EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Good Vibrations  Lv. 1<br>SP {t4}",
			'effect': "Enhances Good Vibrations. Creates a healing aura on the ground, recovering <color_y>{t6}%</color_y><color_w> of MP every {t5} sec and reducing all incoming damage.<br></color_w><color_y>Incoming Damage: -{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '3'],
			'{t6}': [null, '1'],
			'{t7}': [null, '15']
		}
	},
	"4214": {
		name: "Alfredo Tornado (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alfredo Tank Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Commands Alfredo to use Whirlwind.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '424', '443', '461', '480', '499', '586', '604', '623', '641', '660', '747', '766', '784', '803', '821', '908']
		}
	},
	"4415": {
		name: "Injection (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Transforms the bubble blaster into a syringe and charges forward. Press <color_y>regular attack</color_y><color_w> while charging to stab and damage the target.<br></color_w><color_y>Dark Magic<br>Damage: {t5}%<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '91', '96', '105', '111', '124', '157', '189', '207', '223', '240', '257', '274', '291', '308']
		}
	},
	"7308": {
		name: "Mechanic Gatling (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires a Gatling gun at the speed of light.<br><color_y>Damage: {t5}%<br>Rapid Fire</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '137', '139', '141', '144', '146', '158', '165', '168', '171', '185', '211', '218', '224', '231', '237', '270', '279', '288', '298', '308', '355']
		}
	},
	"4402": {
		name: "Sleep Escape (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roto-whirl Lv. 1<br>Tinkerer SP Total 40 or above<br>SP {t4}",
			'effect': "Press the regular attack button when getting hit to spray enemies with sleeping gas and then dodge back.<br><color_y>Damage: {t5}%<br>Duration: {t6} sec<br>Sleep Chance: {t7}%<br>Can also be used by performing a special attack after Injection.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '44', '43', '42', '41', '40', '39', '38', '37', '36'],
			'{t3}': ['34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '75', '79', '86', '91', '96', '119', '123', '128', '132', '136'],
			'{t6}': [null, '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"4556": {
		name: "Toxic Spill EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Spill  Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Toxic Spill. Perform an additional hit by pressing the regular attack button or recover allies' status effects by pressing the special attack button. The additional hit deals damage without poison and is not affected by the bubble.<br><color_y>Additional Hit Damage: {t5}% of Toxic Spill damage<br>Cures a max of 10 status effects</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"4016": {
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
	"4351": {
		name: "Chainsaw Quackum (PVP)",
		changeskill: "7307",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>The Quackums Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a turret that fires electric saws through enemies.<br><color_y>Damage per hit: {t5}%<br>{t6}% of the summoner's HP<br>Duration: {t7} sec<br>Summon up to {t8} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '224', '234', '242', '251', '259', '298', '303', '308', '314', '319', '355', '360', '365', '370'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4504": {
		name: "Frosty Fist EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Volcano Punch EX Lv. 1<br>Frosty Fist  Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the range of Frosty Fist. Allows Frosty Fist and Volcano Punch to be used in a row by pressing the regular attack button twice. Press the special attack button to use Volcano Punch directly.<br><color_y>Additional Hit Damage: {t5}% of Frosty Fist danage<br>Grants 1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"4303": {
		name: "Alfredo Overdrive (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Splash Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Pushes Alfredo into overdrive, firing beams of energy in all four directions.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '678', '700', '722', '743', '765', '866', '888', '909', '931', '952', '1054', '1075', '1097']
		}
	},
	"4505": {
		name: "Magma Monument EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Magma Monument  Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Magma Monument to launch more pillars and deal more damage when they explode.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"4401": {
		name: "Slime Shake  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Bestows a concoction of bubbles onto yourself. The effect depends on the number of bubbles used (minimum 2).<br><color_y>2 Bubbles - STR/AGI/INT: +{t5}%<br>4 Bubbles - Incoming Healing: +{t6}%<br>6 Bubbles - Cooldown Recovery Speed: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35'],
			'{t3}': ['16'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '15'],
			'{t7}': [null, '15'],
			'{t8}': [null, '90']
		}
	},
	"4503": {
		name: "Ice Beam (PVP)",
		changeskill: "4510",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Super Slop Cocktail Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Fires a powerful ice beam. Has a chance to freeze targets.<br><color_y>Ice Magic<br>Damage: {t5}%<br>Freeze Chance: {t6}%<br>Freeze Duration: {t7} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '387', '407', '426', '445', '457', '535', '543', '551', '559', '567', '645', '653', '662'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '3.0', '3.5', '4.0', '4.5', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0']
		}
	},
	"4501": {
		name: "Super Slop Cocktail (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frost Fangs Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Throws a chemical cocktail. Affected targets have lowered accuracy.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Enemy Miss Rate: {t6}%<br>Duration: {t7} sec<br>+{t8} Alchemy Bubble(s)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '123', '134', '144', '154', '158', '184', '188', '192', '197', '201'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4007": {
		name: "Rise and Shine (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the regular attack button while you are down to blow up nearby enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"4008": {
		name: "Bubble Trouble (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Fires a giant bubble that traps enemies and grants shields to allies.<br><color_y>Damage: {t5}%<br>Immobility Duration: {t6} sec<br>Shield Durability: {t7}<br>Shield Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '93', '104', '119', '146', '198', '282', '295', '309', '323', '337'],
			'{t6}': [null, '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0', '2.0'],
			'{t7}': [null, '8', '19', '68', '209', '567', '1022', '1321', '1709', '2212', '2868'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"4221": {
		name: "Flashbang (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 40 or above<br>SP {t4}",
			'effect': "Press the <color_y>regular attack</color_y><color_w> button while you're being hit to drop a flashbang grenade.<br></color_w><color_y>Damage: {t5}%<br>Cooldown: {t6} sec<br>Stun Chance: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '93', '101', '107', '113', '119', '148', '153', '158', '163'],
			'{t6}': [null, '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"4206": {
		name: "Rocket Crash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Attacks while dodging. Press the special attack button to dodge by firing your cannon where you're standing. Press the regular attack button to throw a grenade as you pass by.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '44', '46', '49', '54', '56', '81', '95', '101', '107', '141', '197', '210', '223', '237', '250', '314', '316', '319', '322', '325', '382']
		}
	},
	"4014": {
		name: "Star Burst (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Throw a shock grenade to stun enemies.<br><color_y>Cooldown: {t5} sec<br>Damage: {t6}%<br>Stun Chance: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '75', '80', '86', '97', '103', '147', '161', '219', '249', '274', '358', '366', '373', '381', '389', '455', '463'],
			'{t7}': [null, '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90']
		}
	},
	"4208": {
		name: "Frost Quacker (PVP)",
		changeskill: "7306",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cannon Quackum Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a Frost Quacker to blast ice shards at up to {t5} nearby enemies. Movement Speed of hit enemies decreases by {t6}% for {t7} sec.<br><color_y>Ice Magic<br></color_y><color_y>Damage: {t8}%<br>HP: {t9}% of your Max HP<br>Maximum of {t11} summons, regardless of type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5', '5', '5'],
			'{t8}': [null, '213', '224', '235', '245', '256', '299', '310', '320', '331', '342', '385'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t10}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t11}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4011": {
		name: "Force Bump (PVP)",
		changeskill: "4360",
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
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Distorts space-time to push enemies back.<br><color_y>Damage: 102%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 106%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 110%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 115%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 119%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 139%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 144%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 150%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 155%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 161%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 231%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 238%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 245%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 253%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 260%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 292%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 301%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>']		}
	},
	"4010": {
		name: "Hyperspace Mallet (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use a special attack against a stunned enemy to slam it with a giant hammer.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"4406": {
		name: "Coolant (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frosty Fist  Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Toss an explosive chunk of ice. <br><color_y>Ice Magic<br></color_y><color_y>Damage: {t5}%<br>Action Speed: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '104', '111', '116', '129', '137', '181', '199', '214', '229', '234', '267', '273', '278'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4352": {
		name: "Quackum Crash EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quackum Crash Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the damage of launched Robo-quakums and the HP and duration of hatched Robo-quakums. Also grants Robo-quakums a ranged skill.<br><color_y>Robo-quackum Damage:+{t5}%<br>Duration: +{t6} sec<br>HP: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '50'],
			'{t6}': [null, '15'],
			'{t7}': [null, '5']
		}
	},
	"4554": {
		name: "Contagion EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Injection EX Lv. 1<br>Contagion Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Throws up to 3 flasks and deals more damage to the target. Spread a stronger poison to infect enemies with a disease.<br><color_y>Contagion Damage +{t5}%<br>Plague Damage +{t6}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '300']
		}
	},
	"4410": {
		name: "Magma Monument  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Volcano Punch  Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "{t5} magma pillars erupt from the earth, blocking enemy attacks and dealing damage.<br><color_y>Fire Magic<br>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '106', '108', '110', '119', '123', '164', '172', '185', '193', '202', '244', '255', '260', '262', '264', '303', '305']
		}
	},
	"4358": {
		name: "Gigaton Quack EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gigaton Quack Lv. 1<br>SP {t4}",
			'effect': "Enhances Gigaton Quack. When the quackum reaches its 2nd or 3rd level, throw it to unleash a gang of smaller quackums that damage enemies. <br><color_y>Damage per Small Quackum: {t5}%<br></color_y><color_y> 2nd Level Small Quackums: {t6}<br></color_y><color_y> 3rd Level Small Quackums: {t7}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '10'],
			'{t6}': [null, '3'],
			'{t7}': [null, '6']
		}
	},
	"7309": {
		name: "Cannon Blaster (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Launches land mines from your cannon that explode {t5} sec after being placed.<br><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '116', '117', '117', '118', '119', '123', '128', '129', '131', '142', '155', '162', '166', '171', '175', '194', '200', '206', '213']
		}
	},
	"4310": {
		name: "Lock and Load + Instance (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Lock and Load can be quickly loaded.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4006": {
		name: "Ant Agonizer (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Burns a knocked down enemy with a giant magnifying glass.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '150']
		}
	},
	"4416": {
		name: "Toxic Spill  (PVP)",
		changeskill: "4561",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Contagion Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Reacts with poisoned enemies to cause a massive explosion. Uses alchemy bubbles to increase damage.<br><color_y>Dark Magic<br>Damage: {t5}%<br>{t6} Bubbles Used<br> Damage +{t7}%<br>{t8} Bubbles Used<br> Damage +{t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '230', '258', '272', '324', '344', '444', '470', '496', '522', '548', '657', '666', '676', '685', '695'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t9}': [null, '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25']
		}
	},
	"4017": {
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
	"4209": {
		name: "Cannon Quackum (PVP)",
		changeskill: "7305",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gatling Quacker Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a cannon turret manned by a robo-quackum.<br><color_y>Damage per Hit: {t5}%<br>HP: {t6}% of your Max HP<br>Duration: {t7} sec<br>Summon up to {t8} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '213', '216', '219', '222', '225', '251', '254', '257', '260', '263', '289', '292', '295', '298', '301', '327', '330'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4018": {
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
	"4561": {
		name: "Toxic Spill + Instance (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Toxic Spill can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4003": {
		name: "Roto-whirl (PVP)",
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
	"4220": {
		name: "The Quackums (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mechanic Mode Lv. 1<br>Frost Quacker Lv. 1<br>Tinkerer SP Total 45 or above<br>SP {t4}",
			'effect': "Launches a flare to summon a swarm of angry robo-quackums.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1287', '1525']
		}
	},
	"4308": {
		name: "Splash EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Splash Lv. 1<br>SP {t4}",
			'effect': "Enhances Splash. Increases shots fired from {t5} to {t6}.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '5'],
			'{t6}': [null, '9']
		}
	},
	"4205": {
		name: "Bullet Barrage (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chemical Warfare Lv. 1<br>Alfredo Tornado Lv. 1<br>Tinkerer SP Total 45 or above<br>SP {t4}",
			'effect': "Transforms your cannon into a massive turret. Press the <color_y>regular attack button</color_y><color_w> to fire explosive rounds or the </color_w><color_y>special attack button</color_y><color_w> to fire piercing rounds. Stance will be canceled afterwards. </color_w><color_y>Special attacks</color_y><color_w> can be used right after casting only. Effect ends if you are hit by an attack or you cancel your stance.<br></color_w><color_y>Damage: {t5}%<br>Duration: {t6} sec<br>Large Bullet Damage: {t7}% <br>Small Bullet Damage: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1216', '1439'],
			'{t6}': [null, '8.3', '8.3'],
			'{t7}': [null, '10', '10'],
			'{t8}': [null, '1', '1']
		}
	},
	"4020": {
		name: "Yum-a-tron (PVP)",
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
			'{t2}': ['100', '100', '100'],
			'{t3}': ['34', '84'],
			'{t4}': ['0', '0'],
			'{t5}': [null, 'Summons a vending machine that spits out tasty food every 5 seconds.<br><color_y>Duration: 30 sec</color_y>', 'Summons an automatic vending machine that gives out buff items every 5 seconds. <br><color_y>Vending Machine Duration: 30 sec<br></color_y><color_y>Summons 2 items at once.</color_y>']		}
	},
	"4553": {
		name: "Good Vibrations  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lovesick Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Heals nearby allies and temporarily boosts your elemental damage.<br></color_w><color_y>Healing: {t5}% of Max HP<br>Elemental Damage +{t7}% for {t6} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['50'],
			'{t4}': ['10'],
			'{t5}': [null, '15'],
			'{t6}': [null, '10'],
			'{t7}': [null, '20']
		}
	},
	"4408": {
		name: "Arctic Squish (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Coolant Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Smash enemies repeatedly with a gigantic icy hand.<br><color_y>Ice Magic<br></color_y><color_y>Damage per Hit: {t5}%<br></color_y><color_y>HP: {t6}% of your Max HP<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37', '37'],
			'{t3}': ['22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '42', '44', '46', '47', '50', '60', '62', '68', '72', '74', '88', '91', '95', '97', '99', '113', '114', '116', '117'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5']
		}
	},
	"7302": {
		name: "Chemical Grenade (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lock and Load Lv. 1<br>SP {t4}",
			'effect': "Throws a hand grenade that decreases the enemy's resistances.<br><color_y>Damage: {t5}%<br>All Resistances: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '180', '189', '206', '218', '256', '354', '382', '411', '441', '475', '640', '698'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
		}
	},
	"4219": {
		name: "Quack Patrol (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quack Shock Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Commands robo-quackum to unleash an ultrasonic wave to silence and weaken enemies.<br><color_y>Damage: {t5}%<br>Silence Duration: {t6} sec<br>Removes {t7} buffs</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '113', '118', '123', '128', '134', '158', '163', '168', '173', '179', '203', '208'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '3', '3']
		}
	},
	"7307": {
		name: "Mechanic Chainsaw (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Shoots an electronic saw blade that pierces enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '252', '263', '271', '279', '287', '326', '336', '346', '357', '368', '419', '433', '449', '465']
		}
	},
	"4001": {
		name: "Quick Shot (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Rapidly fires {t5} shots. Attack Speed changes depending on the equipped weapon. Cannons deal physical damage. Bubble Blasters deal Magic Damage.<br>Damage per Shot: {t6}%</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '25.69', '27.352', '28.015', '28.705', '30.339', '31.604', '32.938', '34.685', '36.243', '38.018', '39.815', '45.604', '47.518', '50.618', '61.495', '73.582', '78.623', '83.076', '87.548', '93.076', '108.031', '108.768', '109.486', '111.223', '111.96', '124.45', '125.812', '126.549', '127.267']
		}
	},
	"4215": {
		name: "Alfredo Tank (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Piping Hot Alfredo Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Command Alfredo to absorb damage for you.<br><color_y>Damage Absorbed: {t5}%<br>Duration: {t6} sec<br>Only usable in battle</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['66', '66', '66', '66', '66', '66'],
			'{t3}': ['26', '36', '46', '56', '66'],
			'{t4}': ['3', '1', '1', '1', '1'],
			'{t5}': [null, '20', '22.5', '25', '27.5', '30'],
			'{t6}': [null, '12', '13.5', '15', '16.5', '18']
		}
	},
	"4223": {
		name: "Bodyguard (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alfredo Drop Lv. 1<br>SP {t4}",
			'effect': "Recalls Alfredo to your side.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['36', '36'],
			'{t3}': ['12'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"4404": {
		name: "Salve Slimer (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Slime Surge Lv. 1<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Sacrifices your slime to heal nearby allies over time.<br><color_y>Heals {t5}% of Total HP per Heal<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '0.2'],
			'{t6}': [null, '30']
		}
	},
	"4419": {
		name: "Chemical Cavorter (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Spill  Lv. 1<br>Poison Pop Lv. 1<br>Tinkerer SP Total 40 or above<br>SP {t4}",
			'effect': "Grants a {t5}% chance to gain bonus Alchemy Bubbles when using bubble-granting poison and healing skills.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['1'],
			'{t5}': [null, '100']
		}
	},
	"4359": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Force Bump Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Flashbang</color_y><color_w>, </color_w><color_y>Force Bump</color_y><color_w> can be used to dodge attacks. Can use in any situation for {t5} sec and makes you invincible.<br><br></color_w><color_y>Damage: +{t6}%<br>Force Bump and Instant don't share cooldown<br>Restore cooldown by {t7} sec when Flashbang is used</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '5'],
			'{t7}': [null, '7']
		}
	},
	"7301": {
		name: "Lock and Load (PVP)",
		changeskill: "4310",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Super Ball Lv. 1<br>SP {t4}",
			'effect': "Knocks nearby enemies into the air and loads your weapon. Use the special attack button after using a skill to activate. Cannot be used in Mechanic Mode.<br><color_y>Damage: {t5}%<br>Bullets Generated: {t6} (Duration: {t7} sec)<br>Can load up to {t8} bullets.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '151', '159', '167', '177', '185', '226', '236', '246', '256', '265', '308', '319', '331'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t7}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"4510": {
		name: "Ice Beam + Instance (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Ice Beam has a large range.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43', '43'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4356": {
		name: "Kami-quackum EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Kami-quackum Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Kami-quakum to explode 3 times, increasing in range with each explosion. The explosions also happen more quickly.<br><color_y>Kami-quackum Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"4411": {
		name: "Ground Zero (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Magma Monument  Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Inject the ground with explosive bubbles, causing it to detonate in a straight line. Inject more bubbles to increase the blast radius and damage.<br><color_y>Fire Magic<br>Damage: {t5}%<br>Burn Attacks: {t6}<br>Damage per Burn {t7}%<br>Using {t8} Bubbles<br> Radius: {t9}m<br> Damage: +{t10}%<br>Using {t11} Bubbles<br> Radius: {t12}m <br> Damage: +{t13}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '189', '207', '218', '251', '265', '334', '352', '369', '387', '405', '480', '487', '495', '502', '510'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t9}': [null, '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5'],
			'{t10}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t11}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t12}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t13}': [null, '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25']
		}
	},
	"4217": {
		name: "Quack Shock (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Quackum Crash Lv. 1<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Commands robo-quackum to breathe electricity.<br><color_y>Electrocution Chance: {t5}%<br>Electrocution Duration: {t6} sec<br>Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t6}': [null, '3', '3', '3', '3', '3', '6', '6', '6', '6', '6', '9', '9', '9'],
			'{t7}': [null, '140', '144', '147', '151', '154', '176', '179', '183', '186', '190', '212', '215', '218']
		}
	},
	"4202": {
		name: "Make It Rain (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chemical Grenade Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Fires a rocket into the air, then rains {t5} explosive shells on the battlefield.<br></color_w><color_y>Damage per Shell: {t6}%<br>Uses {t7} bullets</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t6}': [null, '15', '16', '17', '19', '20', '22', '25', '26', '28', '29', '35', '36', '38', '40', '42', '44', '46'],
			'{t7}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4506": {
		name: "Ground Zero EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Ground Zero Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "The heat from Ground Zero continues to damage nearby enemies.<br><color_y>Heat Damage: {t5}% of Ground Zero damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"4002": {
		name: "Alley-oop! (PVP)",
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
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 54%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 57%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 60%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 63%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 66%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 79%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 82%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 85%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 89%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 92%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 106%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 109%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 113%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 116%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 119%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 132%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 135%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 138%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>']		}
	},
	"4502": {
		name: "Volcano Punch EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Volcano Punch  Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Increases damage and range of Volcano Punch. <br><color_y>Volcano Punch Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"4407": {
		name: "Frosty Fist  (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roto-whirl Lv. 1<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Smash enemies with a gigantic ice fist. Has a chance to freeze targets. Use a regular attack while dodging to trigger this skill. Use regular attacks afterwards to trigger Volcano Punch.<br><color_y>Ice Attribute<br></color_y><color_y>Damage: {t5}%<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '47', '49', '51', '55', '57', '75', '79', '83', '103', '110', '142', '150', '159', '168', '177', '207', '210', '212', '214', '216']
		}
	},
	"4305": {
		name: "Make It Rain EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Make It Rain Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Make It Rain to fire more bombs, increasing the explosion range and damage.<br><color_y>Make It Rain Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	}
});