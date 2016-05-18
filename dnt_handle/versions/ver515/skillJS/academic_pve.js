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
		name: "Contagion",
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
			'{t5}': [null, '123', '127', '131', '135', '139', '152', '156', '160', '164', '168', '182', '186'],
			'{t6}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4560": {
		name: "Class Mastery II",
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
		name: "Gravity Grenade",
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
			'{t5}': [null, '303', '326', '348', '371', '394', '499', '522', '545', '568', '591', '696', '719', '742']
		}
	},
	"4222": {
		name: "Napalm",
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
			'{t5}': [null, '128', '143', '158', '173', '188', '279', '294', '309', '324', '339', '429', '444', '459', '474', '489', '579', '594', '609', '625', '640', '730', '745', '760', '775', '790', '880', '895', '910', '925'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4552": {
		name: "Injection EX",
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
			'{t5}': [null, '80']
		}
	},
	"4301": {
		name: "Splash",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bullet Barrage Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Shooting Skill)</color_y><color_w><br>Fires {t5} cannonballs in a fan formation.<br></color_w><color_y>Damage per Shot: {t6}%<br>Use {t7} bullets<br>Fanning possible<br>No cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '202', '207', '212', '217', '222', '247', '252', '257', '262', '268', '292', '297', '302', '308'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"4418": {
		name: "Poison Pop",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Twirl  Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Launch a gigantic poison bubble in an arc to splash down on enemies. Poisons any enemies in range.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Poison Attacks: {t6}<br>Damage per Poison: {t7}%<br>{t8} Bubbles Used<br>Damage: +{t9}%<br>{t10} Bubbles Used<br>Damage: +{t11}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '180', '182', '185', '187', '190', '207', '209', '212', '215', '217', '234'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t9}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t11}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"4306": {
		name: "Chemical Warfare EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"4413": {
		name: "Frost Fangs",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '3443', '4149'],
			'{t6}': [null, '50', '50'],
			'{t7}': [null, '10', '10'],
			'{t8}': [null, '10', '10'],
			'{t9}': [null, '3185', '4777'],
			'{t10}': [null, '3', '3'],
			'{t11}': [null, '4', '4'],
			'{t12}': [null, '100', '100'],
			'{t13}': [null, '5', '5'],
			'{t14}': [null, '5', '5'],
			'{t15}': [null, '200', '200']
		}
	},
	"4004": {
		name: "Wrench Whomp",
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
		name: "Piping Hot Alfredo",
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
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60'],
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
		name: "Class Mastery",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '30']
		}
	},
	"4508": {
		name: "Ice Beam EX",
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
	"4355": {
		name: "Quack Patrol EX",
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
			'{t5}': [null, '9'],
			'{t6}': [null, '30'],
			'{t7}': [null, '30']
		}
	},
	"4218": {
		name: "Kami-quackum",
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
			'{t2}': ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '882', '912', '942', '973', '1003', '1166', '1196', '1226', '1257', '1287', '1449', '1480', '1510', '1540', '1571']
		}
	},
	"7303": {
		name: "Cannon Blaster",
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
			'effect': "Launches land mines from your cannon that explode {t5} seconds after being placed.<br><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '345', '352', '358', '364', '371', '423', '429', '436', '442', '449', '501', '507', '513', '520', '526', '578', '585', '591', '598', '604', '656']
		}
	},
	"4201": {
		name: "Super Ball",
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
			'{t5}': [null, '307', '311', '315', '319', '324', '358', '362', '366', '370', '374', '408', '412', '416', '421', '425', '459', '463', '467', '471', '475', '509'],
			'{t6}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t7}': [null, '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']
		}
	},
	"4557": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "After gaining an Alchemy Bubble from poison or healing skills, increases Damage for <color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Damage +{t6}%<br>Dark Attack +{t7}%<br>When hitting the target with Injection, Injection Cooldown: -{t8} sec<br>Injection generates {t9} more Bubbles</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '20'],
			'{t8}': [null, '8'],
			'{t9}': [null, '1']
		}
	},
	"4015": {
		name: "Alfredo Drop",
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
			'{t2}': ['10', '10', '10', '10'],
			'{t3}': ['12', '22', '32'],
			'{t4}': ['3', '1', '1'],
			'{t5}': [null, '200', '400', '600'],
			'{t6}': [null, '10', '10', '10']
		}
	},
	"4204": {
		name: "Chemical Warfare",
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
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1928', '2025', '2122', '2218', '2315', '2704', '2801', '2897', '2994', '3090'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4353": {
		name: "Gigaton Quack",
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
			'{t5}': [null, '2369', '2444', '2519', '2594', '2669', '3021', '3096', '3171', '3245', '3320', '3672', '3747', '3822'],
			'{t6}': [null, '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80', '80'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150'],
			'{t9}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t10}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7305": {
		name: "Mechanic Cannon",
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
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '322', '326', '330', '334', '338', '369', '373', '377', '381', '385', '416', '420', '424', '428', '432', '463', '467']
		}
	},
	"4405": {
		name: "Slime Surge",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 20 or above<br>SP {t4}",
			'effect': "Summons slime. The number of bubbles used will grant the slime different skills.<br><color_y>Damage: {t5}%<br><br>Slime Skills:<br>Basic Attack - Damage: {t6}%<br>Fire Attack - Damage: {t7}%<br>Poison Attack - Damage: {t8}%<br>Ice Attack - Damage: {t9}%<br><br>{t10} Bubbles Used - Basic Attack and Fire Attack<br>{t11} Bubbles Used - Poison Attack Added<br>{t12} Bubbles Used - Ice Attack Added<br>Duration: {t13} sec<br>Summon up to {t14}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['18', '28', '38', '48', '58', '68', '78', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '100', '110', '120', '130', '140', '150', '160', '170'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t7}': [null, '200', '200', '200', '200', '200', '200', '200', '200'],
			'{t8}': [null, '300', '300', '300', '300', '300', '300', '300', '300'],
			'{t9}': [null, '250', '250', '250', '250', '250', '250', '250', '250'],
			'{t10}': [null, '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t11}': [null, '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t12}': [null, '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t13}': [null, '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t14}': [null, '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4302": {
		name: "Super Ball EX",
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
			'{t6}': [null, '2'],
			'{t7}': [null, '5']
		}
	},
	"4216": {
		name: "Quackum Crash",
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
			'{t5}': [null, '200', '210', '221', '232', '243', '255', '268', '281', '295', '310', '326', '342', '359', '377'],
			'{t6}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70'],
			'{t7}': [null, '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4409": {
		name: "Volcano Punch ",
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
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '376', '391', '405', '420', '434', '552', '566', '581', '595', '609', '727', '741', '756', '770', '785', '902', '917', '931', '946', '960', '1078'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"4207": {
		name: "Gatling Quacker",
		changeskill: "7308",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tinkerer SP Total 25 or above<br>SP {t4}",
			'effect': "Summons a machine gun tower manned by a robo-quackum.<br><color_y>Damage: {t5}%<br>Invincible<br>Duration: {t6} sec<br>Summon up to {t7} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '317', '328', '339', '350', '361', '427', '438', '449', '460', '471', '538', '549', '560', '571', '582', '648', '659', '670', '681', '692', '759'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4403": {
		name: "Bubble Brain",
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
		name: "Bombs-a-daisy",
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
			'{t5}': [null, '135']
		}
	},
	"4354": {
		name: "Quack Shock EX",
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
		name: "Element Enthusiast",
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
	"7304": {
		name: "Mechanic Mode",
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
			'{t5}': [null, '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34'],
			'{t6}': [null, '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']
		}
	},
	"4507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "After gaining an Alchemy Bubble from fire or ice skills, increases Damage for <color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Damage: +{t5}%<br>Fire Attack: +{t7}%<br>Ice Attack: +{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '20'],
			'{t8}': [null, '20']
		}
	},
	"4559": {
		name: "Lock and Load EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Super Ball EX Lv. 1<br>Lock and Load Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "After loading, cooldown for Cannon Blaster changes to {t5} seconds and Shooting Skills deal 30% more damage.<br><color_y>Duration: {t6} sec</color_y>",
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
	"4005": {
		name: "Slip and Slide",
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
			'{t2}': ['20', '20', '19.5', '19', '18.5', '18', '17.5', '17', '16.5', '16', '15.5'],
			'{t3}': ['6', '16', '26', '36', '46', '56', '66', '76', '86', '96'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '12', '15', '18', '21', '24', '27', '30', '33', '36', '39'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9', '9.5'],
			'{t8}': [null, '20', '19.5', '19', '18.5', '18', '17.5', '17', '16.5', '16', '15.5']
		}
	},
	"4307": {
		name: "Class Mastery",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '100']
		}
	},
	"7306": {
		name: "Mechanic Ice Pump",
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
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '320', '334', '349', '364', '379', '439', '453', '468', '483', '498', '557'],
			'{t6}': [null, '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
		}
	},
	"4509": {
		name: "Class Mastery II",
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
	"4305": {
		name: "Make It Rain EX",
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
	},
	"4360": {
		name: "포스 아웃 인스턴트",
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
		name: "Toxic Twirl ",
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
			'{t5}': [null, '273', '279', '284', '289', '295', '338', '343', '348', '354', '359', '402', '407', '413', '418', '423', '466', '472', '477', '482', '487'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4420": {
		name: "Toxic Surge",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '6937', '8380'],
			'{t6}': [null, '11', '11'],
			'{t7}': [null, '7134', '10701'],
			'{t8}': [null, '3', '3'],
			'{t9}': [null, '40', '40'],
			'{t10}': [null, '5', '5'],
			'{t11}': [null, '80', '80']
		}
	},
	"4558": {
		name: "Good Vibrations EX",
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
			'{t6}': [null, '3.4'],
			'{t7}': [null, '30']
		}
	},
	"4214": {
		name: "Alfredo Tornado",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '384', '400', '416', '432', '447', '521', '537', '552', '568', '584', '657', '673', '689', '705', '720', '794']
		}
	},
	"4415": {
		name: "Injection",
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
			'{t5}': [null, '269', '292', '315', '338', '361', '467', '490', '513', '536', '559', '665', '688', '711', '734']
		}
	},
	"7308": {
		name: "Mechanic Gatling",
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
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '317', '328', '339', '350', '361', '427', '438', '449', '460', '471', '538', '549', '560', '571', '582', '648', '659', '670', '681', '692', '759']
		}
	},
	"4402": {
		name: "Sleep Escape",
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
			'{t2}': ['27', '27', '26.5', '26', '25.5', '25', '24.5', '24', '23.5', '23', '22.5'],
			'{t3}': ['34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '132', '137', '143', '148', '153', '177', '183', '188', '193', '199'],
			'{t6}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"4556": {
		name: "Toxic Spill EX",
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
	"4351": {
		name: "Chainsaw Quackum",
		changeskill: "7307",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>The Quackums Lv. 1<br>Engineer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a turret that fires electric saws through enemies.<br><color_y>Damage per Hit: {t5}%<br>Grants temporary invincibility<br>Duration: {t6} sec<br>Enemies near the turret take 20% damage and are knocked back.<br>Summon up to {t7} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1969', '2033', '2097', '2161', '2225', '2527', '2591', '2655', '2720', '2784', '3085', '3150', '3214', '3278'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4504": {
		name: "Frosty Fist EX",
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
	"4359": {
		name: "Class Mastery II",
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
	"4505": {
		name: "Magma Monument EX",
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
		name: "Slime Shake ",
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
			'{t5}': [null, '33'],
			'{t6}': [null, '33'],
			'{t7}': [null, '22'],
			'{t8}': [null, '90']
		}
	},
	"4503": {
		name: "Ice Beam",
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
			'effect': "Fires a powerful ice beam. Has a chance to freeze targets.<br><color_y>Ice Magic<br>Magic Damage: {t5}%<br>Freeze Chance: {t6}%<br>Freeze Duration: {t7} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1182', '1214', '1246', '1279', '1311', '1484', '1517', '1549', '1582', '1614', '1787', '1819', '1852'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '3.0', '3.5', '4.0', '4.5', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0', '5.0']
		}
	},
	"4501": {
		name: "Super Slop Cocktail",
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
			'{t5}': [null, '163', '168', '173', '178', '182', '204', '209', '214', '218', '223'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"4007": {
		name: "Rise and Shine",
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
			'{t2}': ['12', '12'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"4008": {
		name: "Bubble Trouble",
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
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '167', '190', '213', '236', '258', '329', '352', '375', '397', '420'],
			'{t6}': [null, '1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '5.5'],
			'{t7}': [null, '83', '193', '684', '2085', '5674', '10222', '13210', '17086', '22116', '28680'],
			'{t8}': [null, '10', '11', '12', '13', '14', '15', '16', '17', '18', '19']
		}
	},
	"4221": {
		name: "Flashbang",
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
			'{t5}': [null, '157', '163', '170', '176', '182', '212', '218', '225', '231'],
			'{t6}': [null, '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"4206": {
		name: "Rocket Crash",
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
			'{t5}': [null, '86', '89', '93', '97', '101', '191', '198', '206', '213', '221', '311', '318', '326', '333', '341', '431', '438', '446', '453', '461', '551']
		}
	},
	"4014": {
		name: "Star Burst",
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
			'{t6}': [null, '155', '166', '177', '188', '199', '250', '261', '272', '283', '294', '344', '355', '366', '377', '388', '438', '449'],
			'{t7}': [null, '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90']
		}
	},
	"4208": {
		name: "Frost Quacker",
		changeskill: "7306",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cannon Quackum Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a Frost Quacker to blast ice shards at up to {t5} nearby enemies. Movement Speed of hit enemies decreases by {t6}% for {t7} sec.<br><color_y>Ice Magic<br></color_y><color_y>Damage: {t8}%<br>Temporary Invincibility<br>Summoning Time: {t9} sec<br>Maximum of {t10} summons, regardless of type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '3', '4', '5', '6', '7', '8', '9', '10', '10', '10', '10'],
			'{t8}': [null, '320', '334', '349', '364', '379', '439', '453', '468', '483', '498', '557'],
			'{t9}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t10}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4011": {
		name: "Force Bump",
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
			'{t5}': [null, 'Distorts space-time to push enemies back.<br><color_y>Damage: 101%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 105%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 109%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 113%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 117%<br><br>(The effect is enhanced at skill Lv. 6.)</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 134%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 138%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 142%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 146%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 149%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 208%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 213%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 218%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 223%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 228%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 250%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>', 'Distorts space-time to push enemies back.<br><color_y>Damage: 255%<br><br>Attacks while evading backwards. (Can be cast on the spot if activated while moving forward.)<br>Additional Damage: 25%</color_y>']		}
	},
	"4010": {
		name: "Hyperspace Mallet",
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
			'{t5}': [null, '135']
		}
	},
	"4406": {
		name: "Coolant",
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
			'{t5}': [null, '462', '489', '515', '541', '567', '651', '677', '703', '729', '756', '840', '866', '892'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '6', '6', '6', '6', '6', '6', '8', '8', '8', '8', '8', '10', '10']
		}
	},
	"4352": {
		name: "Quackum Crash EX",
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
			'{t7}': [null, '30']
		}
	},
	"4554": {
		name: "Contagion EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Passive Enhance",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Injection EX Lv. 1<br>Contagion Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Throws up to 2 flasks and deals more damage to the target. Spread a stronger poison to infect enemies with a disease.<br><color_y>Contagion Damage: +{t5}%<br>Additional Poison Pop, Toxic Spill EX, and Toxic Surge Damage to Infected Enemies: {t6}%<br>Plague Damage: +{t7}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '100'],
			'{t7}': [null, '1000']
		}
	},
	"4410": {
		name: "Magma Monument ",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Volcano Punch  Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Summon {t5} magma pillars in three directions, temporarily blocking enemy attacks and dealing damage. Deal additional damage according to number of bubbles in your inventory.<br><color_y>Fire Attribute<br>Damage: {t6}%<br>Deal {t8}% additional damage when you have {t7} bubbles<br>Deal {t10}% additional damage if you have {t9} bubbles</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '469', '478', '487', '496', '505', '579', '588', '597', '606', '615', '688', '697', '706', '715', '724', '797', '806'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t8}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t9}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t10}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"4358": {
		name: "Gigaton Quack EX",
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
		name: "Cannon Blaster",
		d1: {
			'lvl': '{n}',
			'weapon': "Cannon",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Launches land mines from your cannon that explode {t5} seconds after being placed.<br><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '345', '352', '358', '364', '371', '423', '429', '436', '442', '449', '501', '507', '513', '520', '526', '578', '585', '591', '598']
		}
	},
	"4310": {
		name: "Lock and Load + Instance",
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
			'{t2}': ['8', '8', '7.5', '7', '6.5', '6', '5.5', '5', '4.5', '4', '3.5', '3', '2.5', '2', '2', '2', '2', '2', '5', '5'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100', '105', '110'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4309": {
		name: "Class Mastery II",
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
	"4416": {
		name: "Toxic Spill ",
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
			'{t5}': [null, '611', '635', '659', '683', '707', '835', '859', '883', '907', '931', '1059', '1083', '1107', '1131', '1155'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t9}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"4017": {
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
	"4209": {
		name: "Cannon Quackum",
		changeskill: "7305",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Gatling Quacker Lv. 1<br>Tinkerer SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a cannon turret manned by a robo-quackum.<br><color_y>Damage per Hit: {t5}%<br>Invincible<br>Duration: {t6} sec<br>Summon up to {t7} turrets of any type</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '322', '326', '330', '334', '338', '369', '373', '377', '381', '385', '416', '420', '424', '428', '432', '463', '467'],
			'{t6}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3']
		}
	},
	"4551": {
		name: "Lovesick",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Debuff",
			'element': "Dark",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Toxic Surge Lv. 1<br>Alchemist SP Total 65 or above<br>SP {t4}",
			'effect': "Infects enemies with a disease to confuse them and deal more Physical and Magic Damage to them. Confused enemies will attack their allies.<br><color_y>Dark Magic<br>Damage: {t5}%<br>Physical and Magic Damage +{t6}%<br>Duration: {t7} sec<br>+1 Alchemy Bubble</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '259', '264', '268', '273', '277', '308', '312', '317', '321', '326'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15']
		}
	},
	"4018": {
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
	"4561": {
		name: "Toxic Spill + Instance",
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
		name: "Roto-whirl",
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
		name: "The Quackums",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '8012', '9641']
		}
	},
	"4308": {
		name: "Splash EX",
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
		name: "Bullet Barrage",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '4848', '4977'],
			'{t6}': [null, '8.3', '8.3'],
			'{t7}': [null, '10', '10'],
			'{t8}': [null, '1', '1']
		}
	},
	"4020": {
		name: "Yum-a-tron",
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
		name: "Good Vibrations ",
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
			'{t5}': [null, '30'],
			'{t6}': [null, '10'],
			'{t7}': [null, '20']
		}
	},
	"4408": {
		name: "Arctic Squish",
		d1: {
			'lvl': '{n}',
			'weapon': "Bubble Blaster",
			'cast': "Instant",
			'element': "Water",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Coolant Lv. 1<br>Tinkerer SP Total 35 or above<br>SP {t4}",
			'effect': "Smash enemies repeatedly with a gigantic icy hand.<br><color_y>Ice Magic<br></color_y><color_y>Damage per Hit: {t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33', '33'],
			'{t3}': ['22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '224', '231', '239', '246', '254', '299', '307', '314', '322', '330', '375', '383', '390', '398', '405', '451', '458', '466', '473'],
			'{t6}': [null, '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13']
		}
	},
	"7302": {
		name: "Chemical Grenade",
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
			'{t5}': [null, '285', '297', '309', '320', '332', '408', '420', '432', '443', '455', '532', '543'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
		}
	},
	"4219": {
		name: "Quack Patrol",
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
			'{t5}': [null, '152', '160', '167', '174', '181', '213', '221', '228', '235', '242', '274', '282'],
			'{t6}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t7}': [null, '1', '1', '1', '1', '1', '2', '2', '2', '2', '2', '3', '3']
		}
	},
	"7307": {
		name: "Mechanic Chainsaw",
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
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '1969', '2033', '2097', '2161', '2225', '2527', '2591', '2655', '2720', '2784', '3085', '3150', '3214', '3278']
		}
	},
	"4001": {
		name: "Quick Shot",
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
			'{t6}': [null, '41', '42', '43', '44', '45', '50', '52', '53', '54', '55', '60', '61', '62', '63', '64', '69', '71', '72', '73', '74', '79', '80', '81', '82', '83', '88', '90', '91', '92']
		}
	},
	"4215": {
		name: "Alfredo Tank",
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
			'{t2}': ['60', '60', '60', '60', '60', '60'],
			'{t3}': ['26', '36', '46', '56', '66'],
			'{t4}': ['3', '1', '1', '1', '1'],
			'{t5}': [null, '20', '22.5', '25', '27.5', '30'],
			'{t6}': [null, '20', '20', '20', '20', '20']
		}
	},
	"4223": {
		name: "Bodyguard",
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
			'{t2}': ['3', '3'],
			'{t3}': ['12'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"4404": {
		name: "Salve Slimer",
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
			'{t2}': ['10', '10'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '0.4'],
			'{t6}': [null, '30']
		}
	},
	"4419": {
		name: "Chemical Cavorter",
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
	"4303": {
		name: "Alfredo Overdrive",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '814', '839', '865', '890', '915', '1035', '1061', '1086', '1112', '1137', '1257', '1283', '1308']
		}
	},
	"7301": {
		name: "Lock and Load",
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
			'{t2}': ['8', '8', '7.5', '7', '6.5', '6', '5.5', '5', '4.5', '4', '3.5', '3', '2.5', '2'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '300', '331', '362', '393', '424', '566', '597', '628', '659', '690', '831', '862', '893'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t7}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"4006": {
		name: "Ant Agonizer",
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
			'{t5}': [null, '135']
		}
	},
	"4510": {
		name: "Ice Beam + Instance",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"4356": {
		name: "Kami-quackum EX",
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
		name: "Ground Zero",
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
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '783', '816', '848', '881', '913', '1088', '1120', '1153', '1185', '1218', '1392', '1424', '1457', '1489', '1522'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t8}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t9}': [null, '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5'],
			'{t10}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t11}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t12}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t13}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"4217": {
		name: "Quack Shock",
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
			'{t7}': [null, '346', '354', '362', '371', '379', '433', '442', '450', '458', '467', '521', '529', '538']
		}
	},
	"4202": {
		name: "Make It Rain",
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
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t6}': [null, '135', '136', '137', '138', '139', '148', '149', '150', '151', '152', '161', '162', '163', '164', '165', '174', '175'],
			'{t7}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2']
		}
	},
	"4506": {
		name: "Ground Zero EX",
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
	"4555": {
		name: "Toxic Twirl EX",
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
	"4002": {
		name: "Alley-oop!",
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
			'{t5}': [null, '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 113%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 122%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 132%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 142%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 152%<br><br>(The effect is enhanced at skill Lv. 6.)</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 195%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 205%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 214%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 224%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 234%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 380%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 392%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 405%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 418%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 431%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 486%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 499%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>', '<color_y>(Shooting Skill)</color_y><color_w><br>Smacks nearby enemies into the air. Press the regular attack button to blast airborne enemies away.<br>Damage: 512%<br><br>The range for smacking is increased and projectiles are created.<br>Additional Damage: 25%</color_w>']		}
	},
	"4502": {
		name: "Volcano Punch EX",
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
		name: "Frosty Fist ",
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
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '103', '106', '110', '113', '117', '138', '141', '145', '148', '151', '172', '176', '179', '183', '186', '207', '211', '214', '218', '221']
		}
	},
	"4212": {
		name: "Alfredo Smash",
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
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4'],
			'{t6}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t7}': [null, '244', '250', '256', '262', '268', '307', '313', '319', '325', '331', '370', '376', '381'],
			'{t8}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	}
});