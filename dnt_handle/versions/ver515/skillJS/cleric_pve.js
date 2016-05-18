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
	"3210": {
		name: "Heart of Glory",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Iron Will Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': "Draw upon your inner power to unleash a powerful blast of holy energy that damages enemies and innervates you.<br><color_y>Light Magic<br>Magic Damage: {t5}%<br><br>Vitality: +{t6}%<br>Movement Speed: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '200', '200'],
			'{t6}': [null, '100', '110'],
			'{t7}': [null, '50', '50'],
			'{t8}': [null, '20', '20']
		}
	},
	"3033": {
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
	"3406": {
		name: "Holy Burst",
		changeskill: "3560",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Grand Cross Lv. 1<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Rain holy fire and brimstone upon all nearby enemies. <br><color_y>Light Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '403', '425', '447', '469', '490', '593', '615', '637', '659', '680', '783', '805', '827', '849', '870']
		}
	},
	"3221": {
		name: "Stance of Faith",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Autoblock Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Use this skill to create Guardian's Grace. Press the <color_y>Jump Key</color_y><color_w> during the </color_w><color_y>{t5} seconds</color_y><color_w> this skill is active to assume a defensive stance. You will block all enemy attacks and reflect holy damage onto attacking enemies. Move to cancel the stance.<br></color_w><color_y>Magic Damage: 100%<br>Creates {t6} Guardian's Grace(s)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"3411": {
		name: "Heavenly Judgment",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Detonate Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': "Rains down a flurry of lightning bolts. Has a chance to <color_y>electrocute</color_y><color_w> enemies.<br>Invincible when casting <br></color_w><color_y>Light<br>Magic Damage: {t5}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t6}% per hit<br>Duration: {t7} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5759', '5916'],
			'{t6}': [null, '25', '25'],
			'{t7}': [null, '15', '15']
		}
	},
	"3556": {
		name: "Detonate EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Detonate Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "After casting Detonate, lightning bolts will be launched in different directions.<br><color_y>Damage per Lightning Bolt: {t5}% of Detonate damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '5']
		}
	},
	"3355": {
		name: "Charitable Zap EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charitable Zap Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Charitable Zap's range and allows it to hit up to {t5} enemies. Increases the number of lightening bolts.<br><color_y>Charitable Zap Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '7'],
			'{t6}': [null, '60']
		}
	},
	"3554": {
		name: "Mind Snapper EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mind Snapper Lv. 1<br>Lightning Bolt EX Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Reduce Mind Snapper's target's <color_y>Elemental Resistance</color_y><color_w> and hit enemies after pulling them back, causing them to explode with a chance of </color_w><color_y>electrocution</color_y><color_w>.<br></color_w><color_y>Mind Snapper Damage +{t5}%<br>Enemy's Elemental Resistance -{t6}% (Duration: {t7} sec)<br><br>Electrocute Note<br>Electrocutes enemies at the max rate of {t8}% with the last hit<br>Duration: {t9} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10'],
			'{t8}': [null, '100'],
			'{t9}': [null, '10']
		}
	},
	"3551": {
		name: "Inquisition",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Heavenly Judgment Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Electrocutes nearby enemies. Electrocuted enemies take additional damage from light magic.<br><color_y>Chance: {t5}%<br>Duration: {t6} sec<br>Range: {t7}m<br>Magic Damage: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '30', '30', '30', '30', '30', '30'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '5', '6', '7', '8', '9', '9'],
			'{t8}': [null, '80', '80', '80', '80', '80', '90']
		}
	},
	"3420": {
		name: "First Aid",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Grants a chance to attack with holy energy and restore some HP when attacked.<br><color_y>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '240']
		}
	},
	"3412": {
		name: "Grand Sigil",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bind Relic Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': "Summons a holy sigil to the battlefield, damaging enemies and protecting allies. The sigil also removes all debuffs, and will have 100% of the summoner's Damage and Defense, and a percentage of the summoner's HP.<br><color_y>Light Magic<br>Magic Damage: {t5}%<br>Physical Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%<br>Buff Duration: {t8} sec<br>Relic Duration: {t9} sec<br>Magic Damage upon Summoning: 25%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['150', '150', '150'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1430', '1696'],
			'{t6}': [null, '30', '30'],
			'{t7}': [null, '30', '30'],
			'{t8}': [null, '20', '20'],
			'{t9}': [null, '13', '13']
		}
	},
	"3017": {
		name: "Stomp Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use a special attack on a knocked down enemy to double stomp them and send them flying with a kick. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '135']
		}
	},
	"3504": {
		name: "Healing Relic EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic EX Lv. 1<br>Healing Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Greatly increases the max HP rate of the summoner when applied to a relic. Decreases damage taken by relic, increases effective range, and restores a set amount of allies' MP.<br><color_y>Recovery Range: {t5}m<br></color_y><color_y>Restores {t6}% of max MP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '0.4']
		}
	},
	"3209": {
		name: "Divine Hammer",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Electric Smite Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': "Summons a gigantic hammer to smash the unworthy 3 times. <br><color_y>Light Magic<br>Physical Damage: {t5}%<br>Magic Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['120', '120', '120'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5595', '6784'],
			'{t6}': [null, '5496', '6642']
		}
	},
	"3201": {
		name: "Shield Charge",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Armor Break Lv. 1<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Charge forward, shield first, to inflict massive damage. During this skill, you will take less damage. Effective on knocked down enemies.<br><color_y>Physical Damage: {t5}%<br>Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%<br>Generates Threat</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '537', '559', '582', '605', '628', '749', '772', '795', '817', '840', '962', '984', '1007', '1030', '1053', '1174'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"3401": {
		name: "Grand Cross",
		changeskill: "3559",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Summons forth a powerful spirit sword of light that can be shot in any direction. Effective on knocked down enemies. <br><color_y>Light Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '473', '481', '489', '496', '504', '568', '576', '584', '591', '599', '663', '671', '679', '686', '694', '758', '766', '774']
		}
	},
	"3219": {
		name: "Divine Vengeance",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Ascension Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Perform a special attack during a successful block to slam the ground with your weapon and send out a shockwave to damage nearby enemies. <br><color_y>Physical Damage: {t5}%<br>Generates Threat<br>Consumes {t6} Guardian's Grace(s)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t3}': ['26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1034', '1102', '1171', '1239', '1307', '1618', '1686', '1754', '1822', '1890', '2201'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"3020": {
		name: "Sliding Step",
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
	"3303": {
		name: "Falling Angel",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Barrier Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Crash down into the ground from above, damaging and stunning any enemies in the shock wave. Generates Threat and hit enemies' Damage decreases. Press the <color_y>Jump Key</color_y><color_w> while in midair to use this skill.<br></color_w><color_y>Light Magic<br>Physical Damage: {t5}%<br>Can be used in the air<br></color_y><color_y>Enemy Damage: -{t6}%<br>Duration {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5', '14.5'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3113', '3204', '3295', '3385', '3476', '3962', '4053', '4144', '4234', '4325', '4811', '4902', '4993'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"3509": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Holy Shield Lv. 1<br>SP {t4}",
			'effect': "<color_y>Holy Shield</color_y><color_w> restores MP for {t6} sec at a rate of {t5}% every {t7} sec.<br><br></color_w><color_y>Magic Damage: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5']
		}
	},
	"3220": {
		name: "Aerial Block",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stance of Faith Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Grants a {t5}% chance to block enemy attacks while airborne.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '36']
		}
	},
	"3223": {
		name: "Shin Breaker",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sliding Step Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Attack during <color_y>Sliding Step</color_y><color_w> to slide forward and attack an enemy's shins, lifting the enemy slightly off the ground. Effective on knocked down enemies. <br></color_w><color_y>Physical Damage: {t5}%<br>Generates Threat</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '133', '142', '152', '162', '171', '234', '244', '253', '263', '273', '335', '345', '355', '364', '374', '437', '446', '456', '466', '475', '538']
		}
	},
	"3418": {
		name: "Blessing of Light",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Increases your Light Attack and Light Defense.<br><color_y>Light Magic<br>Light Attack +{t5}%<br>Light Defense +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['18'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '24'],
			'{t7}': [null, '180']
		}
	},
	"3207": {
		name: "Armor Break",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Shin Breaker Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Dash forward slightly to strike an enemy, breaking their defenses. Decreases the Defense of the attacked.<br><color_y>Physical Damage: {t5}%<br>Generates Threat</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '432', '447', '463', '479', '495', '599', '614', '630', '646', '662', '766', '782']
		}
	},
	"3354": {
		name: "Sacred Hammering EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Goddess Relic EX Lv. 1<br>Sacred Hammering Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Decreases the number of hammers in Sacred Hammering but increases the damage per hammer. Shoots the hammers forward.<br><color_y>Damage per Hammer: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '160']
		}
	},
	"3360": {
		name: "Electric Smite EX Instant",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Electric Smite can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"3031": {
		name: "Holy Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roundhouse Kick Lv. 1<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 101%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 105%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 109%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 114%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 118%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 135%<br></color_y><color_y>Magic Damage: 135%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 139%<br></color_y><color_y>Magic Damage: 139%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 143%<br></color_y><color_y>Magic Damage: 143%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 147%<br></color_y><color_y>Magic Damage: 147%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 151%<br></color_y><color_y>Magic Damage: 151%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 211%<br></color_y><color_y>Magic Damage: 211%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 216%<br></color_y><color_y>Magic Damage: 216%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 221%<br></color_y><color_y>Magic Damage: 221%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 227%<br></color_y><color_y>Magic Damage: 227%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 232%<br></color_y><color_y>Magic Damage: 232%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 254%<br></color_y><color_y>Magic Damage: 254%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 260%<br></color_y><color_y>Magic Damage: 260%<br><br>Increased attack range.</color_y>']		}
	},
	"3353": {
		name: "Judgmental Hammer",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Crusader's Zeal Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Tosses a hammer that feeds on its enemies to grow larger. The hammer's damage and super armor piercing increase as it grows. Damage increases from <color_y>{t5}%</color_y><color_w> up to </color_w><color_y>{t7}%</color_y><color_w> in increments of </color_w><color_y>{t6}%</color_y><color_w>.<br></color_w><color_y>Light Magic<br></color_y><color_y>Physical Damage: {t8}%<br>Magic Damage: {t9}%<br>Deals +{t10}% damage to close enemies</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t7}': [null, '400', '400', '400', '400', '400', '400', '400', '400', '400', '400', '400', '400', '400'],
			'{t8}': [null, '157', '159', '162', '164', '167', '179', '182', '184', '187', '189', '202', '204', '207'],
			'{t9}': [null, '175', '178', '181', '184', '186', '202', '205', '207', '210', '213', '229', '231', '234'],
			'{t10}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"3028": {
		name: "Shield Blow",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Swing your shield at an enemy in front of you. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '109', '114', '120', '125', '130', '159', '164', '170', '175', '181', '209', '215', '220', '225', '231', '259', '265', '270', '276', '281', '309', '315', '320', '326', '331', '360', '365', '370', '376']
		}
	},
	"3301": {
		name: "Autoblock EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Autoblock Lv. 1<br>Heart of Glory Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Generates Guardian's Grace whenever you defend against an enemy's attack.<br><color_y>Each Guardian's Grace increases STR and INT by {t5}% (Can be stacked up to {t6} times)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['45'],
			'{t4}': ['3'],
			'{t5}': [null, '2'],
			'{t6}': [null, '10']
		}
	},
	"3403": {
		name: "Healing Relic",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a holy artifact of healing, which heals nearby party members. Summoned relic will have 100% of the summoner's Damage and Defense, and a percentage of the summoner's HP.<br><color_y>Light Magic<br>Magic Damage upon Summoning: {t5}%<br>Duration: {t6} sec<br>Healing every {t7} sec<br>{t8}% of HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '100'],
			'{t6}': [null, '30'],
			'{t7}': [null, '2'],
			'{t8}': [null, '0.4']
		}
	},
	"3507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Enhances Blessing of Strikes.<br></color_y><color_w>If a Lightning Relic EX is placed nearby, you can summon a small relic using the regular attack button after casting Blessing of Strikes.  The small relic will deal damage that's {t5}x the total damage of the Lightning Relic EX to surrounding areas.<br><br></color_w><color_y>Enhanced Relic Skill<br></color_y><color_w>Movement Speed increases when you use Relic-type Skills.<br></color_w><color_y>Movement Speed +{t6}% <br>Duration {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '3'],
			'{t6}': [null, '30'],
			'{t7}': [null, '5']
		}
	},
	"3555": {
		name: "Chain Lightning EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Lightning Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Chain Lightning to fire more lightning bolts on Electrocuted enemies.<br><color_y>Chain Lightning Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"3024": {
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
	"3023": {
		name: "Sliding Knee Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Sliding Step Lv. 1<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 101%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 112%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 123%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 134%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 145%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 208%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 220%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 231%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 242%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 253%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 316%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 328%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 339%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 350%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 361%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 424%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 435%</color_y>']		}
	},
	"3402": {
		name: "Lightning Bolt",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Summons bolts of lightning that hit enemies multiple times in a line in front of you. Has a chance to <color_y>electrocute</color_y><color_w> enemies.<br></color_w><color_y>Light Magic<br>Magic Damage: {t5}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t6}% per hit<br>Duration: {t7} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '443', '451', '458', '466', '473', '535', '542', '550', '557', '565', '626', '634', '641', '649', '656', '718', '725', '733', '740', '748', '809'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"3205": {
		name: "Divine Punishment",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Aerial Block Lv. 1<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Reflects damage back to enemies for {t5} seconds. The amount is calculated based on the damage you would've taken without Defense or buffs. <br><color_y>Light Magic<br>Damage Reflected: {t6}%<br>Damage Limit: {t7}% of Caster's Damage </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '70'],
			'{t7}': [null, '100']
		}
	},
	"3503": {
		name: "Relic Reaction",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Holy Shield Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Summons lightning bolts to strike enemies within {t5}m of your relics.<br><color_y>Magic Damage per Relic: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '474', '489', '505', '521', '536', '620', '636', '651', '667', '683', '766', '782', '798']
		}
	},
	"3018": {
		name: "Dive Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while jumping to strike an enemy as you land. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"3357": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Hitting an enemy with a light attack gives you buff that increases your Physical and Magic damage by <color_y>{t6}%</color_y><color_w> for </color_w><color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Hit an enemy with a light attack to decrease the cooldown of Electric Smite and Electric Smite EX by {t7} sec.<br></color_y><color_y>Cooldown: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0.5', '0.5'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '10'],
			'{t7}': [null, '2'],
			'{t8}': [null, '0.5']
		}
	},
	"3356": {
		name: "Electric Smite EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Electric Smite Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Electric Smite's attack range and unleashes a lightning bolt.<br><color_y>Smite Damage +{t5}%<br>Damage per Bolt: {t6}% of Electric Smite damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '10']
		}
	},
	"3032": {
		name: "Toughness",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Decreases physical damage taken by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['20'],
			'{t4}': ['10'],
			'{t5}': [null, '10']
		}
	},
	"3016": {
		name: "Angelic Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use a special attack on a stunned enemy to knockdown the enemy with a hammer kick. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"3422": {
		name: "Cure Relic",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Relic Lv. 1<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a holy artifact which negates allies' status abnormalities. Summoned relic will have 100% of the summoner's Damage and Defense, and a percentage of the summoner's HP.<br><color_y>Light Magic<br>Magic Damage upon Summoning: {t5}%<br>Duration: {t6} sec<br>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25'],
			'{t3}': ['28'],
			'{t4}': ['3'],
			'{t5}': [null, '100'],
			'{t6}': [null, '18'],
			'{t7}': [null, '25']
		}
	},
	"3030": {
		name: "Divine Combo",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 208%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 211%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 214%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 217%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 220%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 246%<br></color_y><color_y>Magic Damage: 246%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 249%<br></color_y><color_y>Magic Damage: 249%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 252%<br></color_y><color_y>Magic Damage: 252%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 255%<br></color_y><color_y>Magic Damage: 255%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 258%<br></color_y><color_y>Magic Damage: 258%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 361%<br></color_y><color_y>Magic Damage: 361%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 365%<br></color_y><color_y>Magic Damage: 365%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 369%<br></color_y><color_y>Magic Damage: 369%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 373%<br></color_y><color_y>Magic Damage: 373%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 377%<br></color_y><color_y>Magic Damage: 377%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 410%<br></color_y><color_y>Magic Damage: 410%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 414%<br></color_y><color_y>Magic Damage: 414%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 418%<br></color_y><color_y>Magic Damage: 418%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 422%<br></color_y><color_y>Magic Damage: 422%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 426%<br></color_y><color_y>Magic Damage: 426%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 460%<br></color_y><color_y>Magic Damage: 460%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 464%<br></color_y><color_y>Magic Damage: 464%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 468%<br></color_y><color_y>Magic Damage: 468%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 472%<br></color_y><color_y>Magic Damage: 472%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 476%<br></color_y><color_y>Magic Damage: 476%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 509%<br></color_y><color_y>Magic Damage: 509%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 513%<br></color_y><color_y>Magic Damage: 513%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 517%<br></color_y><color_y>Magic Damage: 517%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 521%<br></color_y><color_y>Magic Damage: 521%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>']		}
	},
	"3213": {
		name: "Conviction Aura",
		d1: {
			'lvl': '{n}',
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Increase your Movement Speed. Cancel the aura by using a different aura or by pressing the skill key again.<br><color_y>Movement Speed: +{t5}%<br>Continuously consumes {t6}% of your MP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '0.2']
		}
	},
	"3218": {
		name: "Divine Ascension",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stance of Faith Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Perform a regular attack during a successful block to launch an enemy with your shield. <br><color_y>Physical Damage: {t5}%<br>Generates Threat<br>Consumes {t6} Guardian's Grace(s)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1041', '1091', '1141', '1192', '1242', '1460', '1510', '1561', '1611', '1661', '1879', '1929', '1980'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"3409": {
		name: "Lightning Relic",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Summons a Lightning Relic that attacks enemies who approach. Has a chance to <color_y>electrocute</color_y><color_w> enemies. The relic will have 100% of the summoner's Damage and Defense and a percentage of the summoner's HP. <br></color_w><color_y>Light Magic<br>Magic Damage upon summoning: {t5}%<br>Magic Damage per projectile: {t6}%<br>Relic Duration: {t7} sec<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t8}% per hit<br>Duration: {t9} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t6}': [null, '24', '25', '26', '27', '28', '31', '32', '33', '34', '35', '39', '40', '41', '42', '43', '46', '47', '48', '49', '50', '54'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6']
		}
	},
	"3211": {
		name: "Elemental Aura",
		d1: {
			'lvl': '{n}',
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Increase your Light Damage. Cancel the aura by using a different aura or by pressing the skill key again.<br><color_y>Light Attack: +{t5}%<br>Continuously consumes {t6}% of your MP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '0.2']
		}
	},
	"3560": {
		name: "Consecrated Holy Burst",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Rain holy fire and brimstone upon all nearby enemies. <br><color_y>Light Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '403', '425', '447', '469', '490', '593', '615', '637', '659', '680', '783', '805', '827', '849', '870']
		}
	},
	"3305": {
		name: "Divine Ascension EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Ascension Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Imbues counterattacks with Light damage. After a counterattack, press the regular attack button to fire a bolt of light in front. Grants invincibility while firing.<br><color_y>Damage per Bolt: {t5}% of Physical Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '20']
		}
	},
	"3022": {
		name: "Vengeance Strike",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the attack button while knocked down to perform a strong attack as you get back on your feet. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"3557": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Deal an extra <color_y>{t5}%</color_y><color_w> non-elemental damage against electrocuted enemies.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '20']
		}
	},
	"3552": {
		name: "Lightning Bolt EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Bolt Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances the attack range, damage, and electrocute chance of Lightning Bolt.<br><color_y>Lightning Bolt Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '50']
		}
	},
	"3208": {
		name: "Provoke",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Taunts enemies within a frontal cone to temporarily grant you more threat than their current targets. The Stun Chance and Critical Chance of taunted monsters temporarily decrease. <br><color_y>Duration: {t5} sec<br>Enemy Stun Chance: -{t6}%<br>Enemy Critical Chance: -{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '14', '13', '12', '11', '10', '9', '8'],
			'{t3}': ['16', '26', '36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '6', '8', '10', '12', '14', '16', '18', '20'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"3217": {
		name: "Autoblock",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Grants a <color_y>{t5}%</color_y><color_w> chance to automatically block enemy attacks.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '21']
		}
	},
	"3307": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "After blocking an enemy attack, gain <color_y>{t6}%</color_y><color_w> Physical Damage for </color_w><color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '20']
		}
	},
	"3351": {
		name: "Crusader's Zeal",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Hammer Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Uses STR to boost your Magic Damage and INT to boost your Physical Damage.<br><color_y>Magic Damage: +{t5}% STR<br>Physical Damage: +{t6}% INT<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['85', '85'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '50'],
			'{t6}': [null, '50'],
			'{t7}': [null, '55']
		}
	},
	"3559": {
		name: "Consecrated Grand Cross",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons forth a powerful spirit sword of light that can be shot in any direction. Effective on knocked down enemies. <br><color_y>Light Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '473', '481', '489', '496', '504', '568', '576', '584', '591', '599', '663', '671', '679', '686', '694', '758', '766', '774']
		}
	},
	"3306": {
		name: "Divine Punishment EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Punishment Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Increases your Movement Speed and deals constant damage to nearby enemies while Divine Punishment is active.<br><color_y>Light Magic<br>Damage per Hit: {t5}% of Physical Damage<br>Movement Speed: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '84'],
			'{t6}': [null, '20']
		}
	},
	"3203": {
		name: "Electric Smite",
		changeskill: "3360",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charitable Zap Lv. 1<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Smite the unrighteous with holy bolts of lightning. Has a chance to <color_y>electrocute</color_y><color_w> enemies.<br></color_w><color_y>Light<br>Physical Damage: {t5}%<br>Magic Damage: {t6}%<br>Electrocution Note<br>Electrocutes enemies at the max rate of {t7}% per hit<br>Duration: {t8} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '743', '781', '818', '856', '893', '1073', '1114', '1152', '1189', '1227', '1406', '1444', '1485', '1523', '1560'],
			'{t6}': [null, '994', '1039', '1088', '1137', '1182', '1410', '1463', '1508', '1556', '1601', '1830', '1875', '1927', '1976', '2021'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"3021": {
		name: "Block",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Focuses your mind to block enemy attacks. Once cast, you will block <color_y>{t5} attacks</color_y><color_w> with your shield. Lasts </color_w><color_y>{t6} seconds</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45'],
			'{t3}': ['10'],
			'{t4}': ['10'],
			'{t5}': [null, '18'],
			'{t6}': [null, '20']
		}
	},
	"3553": {
		name: "Consecration",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inquisition Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Consecrates the ground within a {t5}m radius. Enemies who tread on this holy ground take damage.<br>Grand Cross and Holy Burst are more powerful on consecrated ground.<br><color_y>Light Magic<br>Magic Damage: {t6}%<br></color_y><color_y>Grand Cross Damage: +{t7}%<br></color_y><color_y>Holy Burst Damage: +{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '3695', '3806', '3916', '4027', '4137', '4728', '4839', '5476', '5586', '5697', '6287', '6398', '6508'],
			'{t7}': [null, '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300'],
			'{t8}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"3416": {
		name: "Blessing of Strikes",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Increases your {t5} and {t6}.<br><color_y>Light Magic<br>{t7}: +{t8}%<br>{t9}: +{t10}% <br>Duration: {t11} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, 'Phys Dmg'],
			'{t6}': [null, 'Magic Dmg'],
			'{t7}': [null, 'Phys Dmg'],
			'{t8}': [null, '27'],
			'{t9}': [null, 'Magic Dmg'],
			'{t10}': [null, '27'],
			'{t11}': [null, '180']
		}
	},
	"3558": {
		name: "Consecration EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Consecration Lv. 1<br>SP {t4}",
			'effect': "Enhances Consecration. A powerful ray of light rises from the ground to deal great damage to enemies before consecration ends.<br><color_y>Additional Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '100']
		}
	},
	"3224": {
		name: "Sacred Hammering",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Goddess Relic Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Summons the hammer of light to allow you to deal more powerful damage. Grants a chance to stun enemies. <br><color_y>Light Magic<br></color_y><color_y>Duration: {t5} sec<br></color_y><color_y>Magic Damage: {t6}%<br></color_y><color_y>Physical Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '120', '120', '120', '120', '120', '120', '120', '120', '120', '120', '120', '120', '120'],
			'{t6}': [null, '43', '45', '46', '47', '48', '56', '58', '59', '60', '61', '69', '70', '72'],
			'{t7}': [null, '44', '45', '46', '47', '48', '56', '58', '59', '60', '61', '69', '70', '72']
		}
	},
	"3015": {
		name: "Roundhouse Kick",
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
	"3304": {
		name: "Stance of Faith EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Autoblock EX Lv. 1<br>Stance of Faith Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Use this skill to obtain additional <color_y>Guardian's Grace</color_y><color_w> and move while assuming a </color_w><color_y>defensive stance</color_y><color_w>.<br>You will deal damage equal to your Physical Damage and increase your counterattack range when blocking an enemy attack. Additionally grants </color_w><color_y>Divine Ascension</color_y><color_w> and </color_w><color_y>Divine Vengeance</color_y><color_w> while on </color_w><color_y>defense</color_y><color_w>.<br>When you stand still or move forward or back while in a </color_w><color_y>defensive stance</color_y><color_w>, you can jump using the </color_w><color_y>jump key</color_y><color_w>. When you move to the left or right in a </color_w><color_y>defensive stance</color_y><color_w>, you can use the </color_w><color_y>jump key</color_y><color_w> to cancel the defensive stance.<br></color_w><color_y>Aerial Block</color_y><color_w> is automatically activated when you jump.<br></color_w><color_y><br></color_y><color_y>Defensive Damage Reflect: {t5}% of Physical Damage<br>Earns {t6} Guardian's Grace</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '100'],
			'{t6}': [null, '10']
		}
	},
	"3508": {
		name: "Relic Reaction EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Relic Reaction Lv. 1<br>SP {t4}",
			'effect': "Enhances Relic Reaction. Lightning bolts deal damage 3 times. No change in Damage per bolt.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '']
		}
	},
	"3034": {
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
	"3222": {
		name: "Goddess Relic",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Drops an ancient relic in front of you to damage enemies. <br><color_y>Light Magic <br>Magic Damage: {t5}%<br>Physical Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '387', '396', '404', '413', '422', '492', '501', '510', '518', '527', '597', '606', '615', '623', '632', '703', '711', '720', '729', '737', '808'],
			'{t6}': [null, '387', '396', '405', '413', '422', '492', '501', '510', '518', '527', '598', '606', '615', '624', '632', '703', '712', '720', '729', '738', '808']
		}
	},
	"3506": {
		name: "Bind Relic EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bind Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Greatly increases the max HP rate of the summoner when applied to a relic. Also decreases the damage that a relic receives and increases damage dealt to nearby enemies while increasing range.<br><color_y>Damage dealt to nearby enemies: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '20']
		}
	},
	"3563": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Detonate EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "Using <color_y>Detonate EX</color_y><color_w> increases </color_w><color_y>Light Attribute</color_y><color_w> Damage by {t6}% for {t5} sec.<br><br></color_w><color_y>Magic Damage: +{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5']
		}
	},
	"3358": {
		name: "Judgmental Hammer EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Judgmental Hammer Lv. 1<br>SP {t4}",
			'effect': "Enhances Judgmental Hammer. The hammer flies back to you after damaging the enemy. No change in damage.<br><color_y>Returning Hammer Max Hits: {t5}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '8']
		}
	},
	"3407": {
		name: "Chain Lightning",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mind Snapper Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Hits enemies consecutively and has a chance to <color_y>electrocute</color_y><color_w> them.<br></color_w><color_y>Light<br>Magic Damage: {t5}%<br>Can move up to {t6} times<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t7}% per hit<br>Duration: {t8} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '189', '193', '198', '202', '207', '243', '247', '252', '256', '261', '297', '302', '306', '311', '315', '352', '356', '361', '365'],
			'{t6}': [null, '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10', '11'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12']
		}
	},
	"3408": {
		name: "Detonate",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Chain Lightning Lv. 1<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Detonates all nearby enemies who are electrocuted. <br><color_y>Light  Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '649', '703', '756', '810', '863', '1115', '1168', '1222', '1275', '1329', '1580', '1634', '1687', '1741', '1794', '2046', '2099']
		}
	},
	"3035": {
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
	"3019": {
		name: "Righteous Bolt",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Summons a bolt of lightning that spreads in four directions upon impact. Has a chance to <color_y>electrocute</color_y><color_w> enemies.<br></color_w><color_y>Light<br>Damage for each bolt of lightning: {t5}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t6}% per hit<br>Duration: {t7} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '89', '93', '97', '100', '103', '114', '116', '119', '122', '125', '135', '138', '141', '144', '146', '157', '160', '162', '165', '168', '179', '181', '184', '187', '190', '200', '203', '206'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"3302": {
		name: "Divine Barrier",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Autoblock EX Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Consumes your <color_y>Guardian's Grace</color_y><color_w> to damage all enemies within {t5}m and encase all allies within {t6}m in a damage-absorbing barrier.<br></color_w><color_y>Light Magic<br></color_y><color_y>Physical Damage: {t7}%<br>Barrier Health: {t8}<br>Barrier Duration: {t9} sec<br>Guardian's Grace Consumed: {t10}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['48'],
			'{t4}': ['10'],
			'{t5}': [null, '5'],
			'{t6}': [null, '10'],
			'{t7}': [null, '447'],
			'{t8}': [null, '20'],
			'{t9}': [null, '20'],
			'{t10}': [null, '2']
		}
	},
	"3414": {
		name: "Protection Shell",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Reduces Physical Damage and Magic Damage taken by you and allies.<br><color_y>Light Magic<br>Physical Damage: -{t5}%<br>Magic Damage: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['18'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '20']
		}
	},
	"3002": {
		name: "Struck by Lightning",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Attacks an enemy with an upward weapon strike followed by a bolt of lightning. Effective on knocked down enemies. <br><color_y>Light Magic<br>Physical Damage: {t5}%<br>Magic Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '88', '91', '94', '97', '100', '113', '115', '117', '119', '121', '135', '137', '139', '141', '143', '157', '159', '161', '163', '165', '178', '180', '183', '185', '187', '200', '202', '204', '206'],
			'{t6}': [null, '71', '73', '75', '78', '80', '96', '98', '117', '102', '104', '114', '116', '118', '120', '121', '132', '134', '135', '136', '139', '149', '150', '153', '154', '156', '167', '168', '170', '171']
		}
	},
	"3421": {
		name: "Vengeance Blast",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Press the regular attack button when attacked to strike back with a holy blast. <br><color_y>Light Magic<br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['29', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '129', '134', '140', '145', '150', '174', '180', '185', '190', '196', '220']
		}
	},
	"3352": {
		name: "Goddess Relic EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Goddess Relic Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Improves the attack range and damage of Goddess Relic.<br><color_y>Goddess Relic Damage +{t5}%<br>Elemental Resistance -{t6}% <br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '110'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"3505": {
		name: "Cure Relic EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cure Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Greatly increases the max HP rate of the summoner when applied to a relic. Also decreases the damage that a relic receives. Increases Movement Speed while the skill is active, and increases range. Cures you of status effects when cast and knocks back nearby enemies.<br><color_y>Movement Speed: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '15']
		}
	},
	"3309": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Iron Will Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "<color_y>Divine Barrier</color_y><color_w> restores </color_w><color_y>Iron Will</color_y><color_w> cooldown by {t5} sec.<br><br></color_w><color_y>Movement Speed: +{t6}%<br>Damage taken: -{t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"3426": {
		name: "Wand Mastery",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Allows you to be more proficient with wands.<br><color_y>Magic Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['16'],
			'{t4}': ['10'],
			'{t5}': [null, '18']
		}
	},
	"3029": {
		name: "Paralyze Bolt",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Shoots a bolt of holy energy to attack an enemy in front of you. Paralyzes the enemy for <color_y>{t5} seconds</color_y><color_w>. <br></color_w><color_y>Light Magic <br>Defense: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1.5', '1.5', '1.5', '1.5', '1.5', '2', '2', '2', '2', '2', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5', '2.5'],
			'{t6}': [null, '59', '63', '67', '71', '75', '100', '111', '122', '133', '144', '218', '229', '240', '251', '262', '337', '348', '359', '370', '381', '455', '466', '477', '488', '499', '574', '585']
		}
	},
	"3308": {
		name: "Falling Angel EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Falling Angel Lv. 1<br>SP {t4}",
			'effect': "Enhances Falling Angel. Launches enemies into the air and pulls them down to the ground to smash them. However, you cannot launch enemies when using the jump key. <br><color_y> Launch Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"3502": {
		name: "Lightning Relic EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Greatly increases the max HP rate of the summoner when applied to a relic. Also decreases the damage that a relic receives and constantly generates an electric field near the Lightning Relic.<br><color_y>Electrical Field Damage: {t5}% of Magic Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '25']
		}
	},
	"3501": {
		name: "Holy Shield",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Grand Sigil Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Restores the HP of all allies including yourself.<br><color_y>Healing Skill<br>Heals {t5}% of max HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['12'],
			'{t4}': ['10'],
			'{t5}': [null, '30.0']
		}
	},
	"3036": {
		name: "Redemption Aura",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Your and your party member's HP increases and augments healing effect of skill and item.<br><color_y>Increases HP by {t5}%<br>Increases healing {t6}%<br>Duration: {t7} sec </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['34'],
			'{t4}': ['0'],
			'{t5}': [null, '20'],
			'{t6}': [null, '20'],
			'{t7}': [null, '300']
		}
	},
	"3214": {
		name: "Iron Will",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Punishment Lv. 1<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Greatly decreases the amount of physical and magic damage you take. <br><color_y>Damage Taken: -{t5}%<br>Magic Damage Taken: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['32'],
			'{t4}': ['10'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '18']
		}
	},
	"3202": {
		name: "Charitable Zap",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Righteous Bolt Lv. 1<br>Sacred Hammering Lv. 1<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Charges the air in front of you, electrocuting up to {t5} enemies. Electrocuted enemies will damage other nearby enemies. <br><color_y>Light Magic<br>Magic Damage: {t6}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t7}% per hit<br>Duration: {t8} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31', '31'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '716', '752', '788', '824', '860', '1052', '1087', '1123', '1159', '1195', '1387', '1422', '1458', '1494', '1530', '1722', '1757'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"3003": {
		name: "Aura of Healing",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Restores the HP of all allies within 4m, including yourself.<br><color_y>Healing Skill<br>Heals {t5}% of max HP</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60'],
			'{t3}': ['45', '17', '22'],
			'{t4}': ['3', '1', '1'],
			'{t5}': [null, '3.0', '4.5', '6.0']
		}
	},
	"3359": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Electric Smite EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Shield Charge</color_y><color_w> or </color_w><color_y>Armor Break</color_y><color_w>, </color_w><color_y>Electric Smite EX</color_y><color_w> temporarily becomes an instant skill.<br><br></color_w><color_y>Physical Damage: +{t5}% <br>Magic Damage: +{t6}%<br>Electic Smite and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['0'],
			'{t5}': [null, '2.5'],
			'{t6}': [null, '2.5']
		}
	},
	"3423": {
		name: "Bind Relic",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cure Relic Lv. 1<br>Cleric SP Total 40 or above<br>SP {t4}",
			'effect': "Summons a holy artifact which binds nearby enemies in place. Summoned relic will have 100% of the summoner's Damage and Defense, and a percentage of the summoner's HP.<br><color_y>Light Magic<br>Magic Damage upon Summoning: {t5}%<br>Duration: {t6} sec<br>Holds for {t7} sec<br>Cooldown: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '55', '50', '45', '40', '39', '38', '37', '36', '35'],
			'{t3}': ['32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t6}': [null, '9', '12', '15', '18', '21', '23', '25', '27', '30', '33'],
			'{t7}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t8}': [null, '60', '55', '50', '45', '40', '39', '38', '37', '36', '35']
		}
	},
	"3425": {
		name: "Mind Snapper",
		changeskill: "3564",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Bolt Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Attack during a <color_y>Sliding Step</color_y><color_w> to spin around once, dealing a powerful electric shock to the area. Has a chance to stun enemies.<br></color_w><color_y>Light Magic<br>Magic Damage: {t5}%<br>Directly attacks nearby enemies, dealing 30% additional damage.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '96', '111', '165', '219', '273', '447', '501', '555', '608', '662', '836', '890', '944']
		}
	}
});