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
		name: "Heart of Glory (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '200', '200'],
			'{t6}': [null, '100', '110'],
			'{t7}': [null, '50', '50'],
			'{t8}': [null, '14', '14']
		}
	},
	"3033": {
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
	"3406": {
		name: "Holy Burst (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '196', '214', '225', '256', '269', '355', '374', '394', '413', '433', '536', '545', '554', '563', '572']
		}
	},
	"3221": {
		name: "Stance of Faith (PVP)",
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
			'{t5}': [null, '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"3411": {
		name: "Heavenly Judgment (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Detonate Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': "Rains down a flurry of lightning bolts. Has a chance to <color_y>electrocute</color_y><color_w> enemies.<br></color_w><color_y>Light<br>Magic Damage: {t5}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t6}% per hit<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1066', '1259'],
			'{t6}': [null, '25', '25'],
			'{t7}': [null, '15', '15']
		}
	},
	"3556": {
		name: "Detonate EX (PVP)",
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
			'{t5}': [null, '10']
		}
	},
	"3355": {
		name: "Charitable Zap EX (PVP)",
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
			'{t6}': [null, '30']
		}
	},
	"3554": {
		name: "Mind Snapper EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '10'],
			'{t8}': [null, '100'],
			'{t9}': [null, '10']
		}
	},
	"3551": {
		name: "Inquisition (PVP)",
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
		name: "First Aid (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['36'],
			'{t4}': ['10'],
			'{t5}': [null, '96']
		}
	},
	"3412": {
		name: "Grand Sigil (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bind Relic Lv. 1<br>Cleric SP Total 45 or above<br>SP {t4}",
			'effect': " Summons a holy sigil to the battlefield, damaging enemies and protecting allies. The sigil also removes all debuffs.<br><color_y>Light Magic<br>Magic Damage: {t5}%<br>Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%<br>Buff Duration: {t8} sec<br>Relic Duration: {t9} sec<br>25% additional damage to nearby enemies when summoned</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '813', '955'],
			'{t6}': [null, '58', '58'],
			'{t7}': [null, '58', '58'],
			'{t8}': [null, '6', '6'],
			'{t9}': [null, '13', '13']
		}
	},
	"3017": {
		name: "Stomp Kick (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"3504": {
		name: "Healing Relic EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic EX Lv. 1<br>Healing Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Increases the healing range of Healing Relic and decreases all incoming damage for {t5} sec.<br><color_y>Damage Taken: -{t6}%<br>Healing Range: {t7}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"3209": {
		name: "Divine Hammer (PVP)",
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
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '697', '816'],
			'{t6}': [null, '896', '1055']
		}
	},
	"3201": {
		name: "Shield Charge (PVP)",
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
			'{t5}': [null, '241', '267', '281', '296', '351', '440', '476', '503', '530', '557', '680', '690', '700', '710', '720', '827'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"3401": {
		name: "Grand Cross (PVP)",
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
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '181', '188', '191', '204', '210', '248', '287', '300', '320', '334', '405', '423', '440', '444', '447', '515', '519', '523']
		}
	},
	"3219": {
		name: "Divine Vengeance (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '85', '91', '107', '137', '153', '167', '181', '194', '202', '210', '218'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"3020": {
		name: "Sliding Step (PVP)",
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
		name: "Falling Angel (PVP)",
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
			'{t2}': ['36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3', '36.3'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '648', '675', '701', '728', '746', '861', '876', '891', '906', '921', '981', '1015', '1049'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"3509": {
		name: "Class Mastery II (PVP)",
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
			'{t5}': [null, '1'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"3220": {
		name: "Aerial Block (PVP)",
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
			'{t2}': ['10', '10'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '12']
		}
	},
	"3223": {
		name: "Shin Breaker (PVP)",
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
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '57', '59', '61', '64', '66', '79', '86', '89', '93', '107', '132', '138', '144', '150', '156', '183', '185', '188', '190', '193', '217']
		}
	},
	"3418": {
		name: "Blessing of Light (PVP)",
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
			'{t5}': [null, '24'],
			'{t6}': [null, '24'],
			'{t7}': [null, '180']
		}
	},
	"3207": {
		name: "Armor Break (PVP)",
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
			'{t5}': [null, '127', '133', '147', '155', '187', '248', '268', '289', '296', '299', '355', '358']
		}
	},
	"3354": {
		name: "Sacred Hammering EX (PVP)",
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
		name: "Electric Smite EX Instant (PVP)",
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
		name: "Holy Kick (PVP)",
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
			'{t5}': [null, 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 38%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 40%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 42%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 45%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Damage: 47%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 57%<br></color_y><color_y>Magic Damage: 57%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 59%<br></color_y><color_y>Magic Damage: 59%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 64%<br></color_y><color_y>Magic Damage: 63%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 67%<br></color_y><color_y>Magic Damage: 66%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 70%<br></color_y><color_y>Magic Damage: 69%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 82%<br></color_y><color_y>Magic Damage: 81%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 84%<br></color_y><color_y>Magic Damage: 84%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 86%<br></color_y><color_y>Magic Damage: 86%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 89%<br></color_y><color_y>Magic Damage: 88%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 91%<br></color_y><color_y>Magic Damage: 90%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 102%<br></color_y><color_y>Magic Damage: 101%<br><br>Increased attack range.</color_y>', 'Press the special attack button after a <color_y>Roundhouse Kick</color_y><color_w> to rapidly dash forward and perform a side kick.<br></color_w><color_y>Physical Damage: 104%<br></color_y><color_y>Magic Damage: 103%<br><br>Increased attack range.</color_y>']		}
	},
	"3353": {
		name: "Judgmental Hammer (PVP)",
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
			'{t8}': [null, '19', '20', '21', '22', '22', '26', '26', '27', '27', '27', '29', '30', '30'],
			'{t9}': [null, '19', '20', '21', '21', '22', '23', '24', '24', '25', '26', '27', '28', '29'],
			'{t10}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"3028": {
		name: "Shield Blow (PVP)",
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
			'{t5}': [null, '54', '56', '59', '61', '64', '76', '79', '82', '86', '89', '103', '113', '118', '122', '144', '173', '181', '190', '198', '207', '238', '241', '244', '247', '250', '276', '279', '283', '286']
		}
	},
	"3301": {
		name: "Autoblock EX (PVP)",
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
		name: "Healing Relic (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Summons a holy artifact of healing, which heals a nearby party member. <br><color_y>Light Magic<br>Magic Damage upon Summoning: {t5}%<br>Duration: {t6} sec<br>Healing: {t8}% of HP every {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '100'],
			'{t6}': [null, '30'],
			'{t7}': [null, '2'],
			'{t8}': [null, '0.2']
		}
	},
	"3507": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Movement Speed after using a relic skill.<br><color_y>Duration: {t5} sec<br>Movement Speed +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '3'],
			'{t6}': [null, '30']
		}
	},
	"3555": {
		name: "Chain Lightning EX (PVP)",
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
	"3023": {
		name: "Sliding Knee Kick (PVP)",
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
			'{t5}': [null, 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 50%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 53%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 55%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 59%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to jump and knee an enemy. <br></color_w><color_y>Damage: 61%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 79%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 84%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 101%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 111%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 119%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 148%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 151%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 154%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 157%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 159%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 184%</color_y>', 'Press the special attack button during <color_y>Sliding Step</color_y><color_w> to perform a jumping knee and strike the enemy down with a follow-up kick. <br></color_w><color_y>Damage: 187%</color_y>']		}
	},
	"3402": {
		name: "Lightning Bolt (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Summons bolts of lightning that hit enemies multiple times in a line in front of you. Has a chance to <color_y>electrocute</color_y><color_w> enemies. May grant the target immunity for {t5} sec.<br></color_w><color_y>Light<br>Magic Damage: {t6}%<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t7}% per hit<br>Duration: {t8} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t6}': [null, '82', '83', '85', '86', '89', '100', '108', '111', '115', '134', '162', '175', '184', '193', '201', '244', '245', '247', '248', '250', '285'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"3205": {
		name: "Divine Punishment (PVP)",
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
			'{t2}': ['50', '50'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '8'],
			'{t6}': [null, '24'],
			'{t7}': [null, '100']
		}
	},
	"3503": {
		name: "Relic Reaction (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '253', '262', '272', '281', '288', '331', '336', '342', '347', '353', '375', '388', '400']
		}
	},
	"3018": {
		name: "Dive Kick (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"3357": {
		name: "Class Mastery (PVP)",
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
			'{t6}': [null, '5'],
			'{t7}': [null, '1'],
			'{t8}': [null, '0.5']
		}
	},
	"3356": {
		name: "Electric Smite EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Electric Smite Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Electric Smite's attack range and unleashes a lightning bolt.<br><color_y>Damage per Bolt: {t5}% of Electric Smite damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '5']
		}
	},
	"3032": {
		name: "Toughness (PVP)",
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
		name: "Angelic Kick (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"3422": {
		name: "Cure Relic (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Wand",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Healing Relic Lv. 1<br>Cleric SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a holy artifact in front of you that removes nearby party members' statuses.<br><color_y>Light Magic<br>Summoned Magic Damage: {t5}%<br>Duration: {t6} sec<br>Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['28'],
			'{t4}': ['3'],
			'{t5}': [null, '100'],
			'{t6}': [null, '18'],
			'{t7}': [null, '40']
		}
	},
	"3030": {
		name: "Divine Combo (PVP)",
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
			'{t5}': [null, 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 126%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 129%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 131%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 134%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Damage: 136%<br><br>(The effect is enhanced at skill lv.6.)</color_y>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 154%<br></color_y><color_y>Magic Damage: 154%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 157%<br></color_y><color_y>Magic Damage: 157%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 160%<br></color_y><color_y>Magic Damage: 159%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 165%<br></color_y><color_y>Magic Damage: 165%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 168%<br></color_y><color_y>Magic Damage: 168%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 189%<br></color_y><color_y>Magic Damage: 188%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 205%<br></color_y><color_y>Magic Damage: 204%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 212%<br></color_y><color_y>Magic Damage: 210%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 219%<br></color_y><color_y>Magic Damage: 217%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 258%<br></color_y><color_y>Magic Damage: 252%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 315%<br></color_y><color_y>Magic Damage: 307%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 331%<br></color_y><color_y>Magic Damage: 322%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 346%<br></color_y><color_y>Magic Damage: 336%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 362%<br></color_y><color_y>Magic Damage: 351%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 378%<br></color_y><color_y>Magic Damage: 366%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 444%<br></color_y><color_y>Magic Damage: 429%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 447%<br></color_y><color_y>Magic Damage: 431%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 450%<br></color_y><color_y>Magic Damage: 434%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 453%<br></color_y><color_y>Magic Damage: 437%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 456%<br></color_y><color_y>Magic Damage: 440%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 514%<br></color_y><color_y>Magic Damage: 495%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 517%<br></color_y><color_y>Magic Damage: 498%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 520%<br></color_y><color_y>Magic Damage: 501%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>', 'Dash forward to perform a series of rapid attacks. Press <color_y>regular attack</color_y><color_w> during the attack to push away enemies.<br></color_w><color_y>Physical Damage: 523%<br></color_y><color_y>Magic Damage: 504%<br><br>Press </color_y><color_y>special attack</color_y><color_w> for a faster attack that hits downed enemies and launches them into the air.</color_w>']		}
	},
	"3213": {
		name: "Conviction Aura (PVP)",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '0.42']
		}
	},
	"3218": {
		name: "Divine Ascension (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stance of Faith Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Perform a regular attack during a successful block to launch an enemy with your shield. <br><color_y>Physical Damage: {t5}%<br>Generates Threat<br>Guardian's Grace Consumed: {t6} (Can be cast with 0 Guardian's Grace)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '61', '66', '69', '76', '81', '95', '102', '109', '115', '119', '124', '128', '132'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"3409": {
		name: "Lightning Relic (PVP)",
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
		name: "Elemental Aura (PVP)",
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
			'{t5}': [null, '17'],
			'{t6}': [null, '0.42']
		}
	},
	"3560": {
		name: "Consecrated Holy Burst (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '243', '263', '277', '309', '325', '422', '444', '465', '487', '509', '621', '634', '646', '659', '671']
		}
	},
	"3305": {
		name: "Divine Ascension EX (PVP)",
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
		name: "Vengeance Strike (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the attack button while knocked down to perform a strong attack as you get back on your feet. <br><color_y>Physical Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"3557": {
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '3']
		}
	},
	"3552": {
		name: "Lightning Bolt EX (PVP)",
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
		name: "Provoke (PVP)",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['16', '26', '36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '6', '8', '10', '12', '14', '16', '18', '20'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"3217": {
		name: "Autoblock (PVP)",
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
			'{t5}': [null, '2.3']
		}
	},
	"3307": {
		name: "Class Mastery (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '20']
		}
	},
	"3351": {
		name: "Crusader's Zeal (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Hammer Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Increases all types of Damage briefly.<br><color_y>All Damage: +{t5}%<br>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['85', '85'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '25'],
			'{t6}': [null, '30']
		}
	},
	"3559": {
		name: "Consecrated Grand Cross (PVP)",
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
			'{t2}': ['28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '181', '187', '190', '202', '208', '244', '278', '289', '307', '319', '384', '400', '415', '419', '422', '484', '488', '492']
		}
	},
	"3306": {
		name: "Divine Punishment EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Divine Punishment Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Deals constant damage to nearby enemies while Divine Punishment is active.<br><color_y>Light Magic<br>Damage per Hit: {t5}% of Physical Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '42']
		}
	},
	"3203": {
		name: "Electric Smite (PVP)",
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
			'{t5}': [null, '164', '188', '199', '243', '260', '346', '369', '392', '415', '438', '560', '586', '611', '635', '659'],
			'{t6}': [null, '208', '239', '254', '312', '333', '447', '477', '507', '537', '567', '721', '754', '786', '817', '848'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t8}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"3021": {
		name: "Block (PVP)",
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
			'{t5}': [null, '5'],
			'{t6}': [null, '12']
		}
	},
	"3553": {
		name: "Consecration (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Inquisition Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Consecrates the ground within a {t5}m radius. Enemies who tread on this holy ground take damage.<br><color_y>Light Magic<br>Magic Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '719', '747', '776', '804', '824', '949', '965', '1053', '1070', '1086', '1151', '1197', '1243']
		}
	},
	"3416": {
		name: "Blessing of Strikes (PVP)",
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
		name: "Consecration EX (PVP)",
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
			'{t5}': [null, '50']
		}
	},
	"3224": {
		name: "Sacred Hammering (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Mace, Flail",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Goddess Relic Lv. 1<br>Cleric SP Total 25 or above<br>SP {t4}",
			'effect': "Summons the hammer of light to allow you to deal more powerful damage. Grants a chance to stun enemies. <br><color_y>Light Magic<br></color_y><color_y>Duration: {t5} sec<br></color_y><color_y>Magic Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '2', '3', '4', '4', '5', '6', '7', '8', '9', '10', '11', '13', '14']
		}
	},
	"3015": {
		name: "Roundhouse Kick (PVP)",
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
		name: "Stance of Faith EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Shield",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Autoblock EX Lv. 1<br>Stance of Faith Lv. 1<br>Paladin SP Total 65 or above<br>SP {t4}",
			'effect': "Use this skill to obtain additional <color_y>Guardian's Grace</color_y><color_w> and move while assuming a </color_w><color_y>defensive stance</color_y><color_w>.<br>You will deal damage equal to your Physical Damage and increase your counterattack range when blocking an enemy attack. <br>When you stand still or move forward or back while in a </color_w><color_y>defensive stance</color_y><color_w>, you can jump using the </color_w><color_y>jump key</color_y><color_w>. When you move to the left or right while in a </color_w><color_y>defensive stance</color_y><color_w>, you can use the </color_w><color_y>jump key</color_y><color_w> to cancel the defensive stance.<br></color_w><color_y>Aerial Block</color_y><color_w> is automatically activated when you jump.<br></color_w><color_y><br></color_y><color_y>Defensive Damage Reflect: 100% of Physical Damage<br>Earns {t5} Guardian's Grace</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '10']
		}
	},
	"3508": {
		name: "Relic Reaction EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Relic Reaction Lv. 1<br>SP {t4}",
			'effect': "Enhances Relic Reaction. Lightning bolts deal damage 2 times. No change in Damage per bolt.",
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
	"3222": {
		name: "Goddess Relic (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleric SP Total 20 or above<br>SP {t4}",
			'effect': "Drops an ancient relic in front of you to damage enemies. <br><color_y>Light Magic <br>Magic Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '156', '159', '162', '165', '170', '195', '210', '217', '224', '260', '319', '343', '360', '377', '393', '483', '486', '489', '493', '497', '573']
		}
	},
	"3506": {
		name: "Bind Relic EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bind Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Bind Relic's range and the amount of damage dealt to nearby enemies.<br><color_y>Area Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '10']
		}
	},
	"3563": {
		name: "Class Mastery II (PVP)",
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
		name: "Judgmental Hammer EX (PVP)",
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
		name: "Chain Lightning (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mind Snapper Lv. 1<br>Cleric SP Total 30 or above<br>SP {t4}",
			'effect': "Hits enemies consecutively and has a chance to <color_y>electrocute</color_y><color_w> them. May grant the target immunity for {t5} sec.<br></color_w><color_y>Light<br>Magic Damage: {t6}%<br>Can move up to {t7} times<br><br>Electrocution Note<br>Electrocutes enemies at the max rate of {t8}% per hit<br>Duration: {t9} sec<br>Causes a shock periodically</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t6}': [null, '13', '14', '15', '17', '18', '21', '22', '29', '31', '35', '46', '49', '52', '56', '57', '60', '64', '70', '71'],
			'{t7}': [null, '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '1', '1', '1'],
			'{t8}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t9}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"3408": {
		name: "Detonate (PVP)",
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
			'{t5}': [null, '120', '127', '133', '147', '155', '222', '236', '255', '270', '285', '364', '383', '394', '401', '408', '485', '492']
		}
	},
	"3035": {
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
	"3019": {
		name: "Righteous Bolt (PVP)",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '45', '47', '49', '51', '53', '61', '63', '67', '69', '71', '85', '89', '92', '109', '117', '135', '142', '148', '155', '160', '179', '181', '184', '186', '188', '207', '209', '212'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"3302": {
		name: "Divine Barrier (PVP)",
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
			'{t2}': ['45', '45'],
			'{t3}': ['48'],
			'{t4}': ['10'],
			'{t5}': [null, '5'],
			'{t6}': [null, '10'],
			'{t7}': [null, '425'],
			'{t8}': [null, '2623'],
			'{t9}': [null, '8'],
			'{t10}': [null, '2']
		}
	},
	"3414": {
		name: "Protection Shell (PVP)",
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
			'{t2}': ['10', '10'],
			'{t3}': ['18'],
			'{t4}': ['10'],
			'{t5}': [null, '15'],
			'{t6}': [null, '15'],
			'{t7}': [null, '180']
		}
	},
	"3002": {
		name: "Struck by Lightning (PVP)",
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
			'{t5}': [null, '44', '46', '47', '49', '50', '60', '62', '64', '67', '69', '80', '87', '91', '94', '111', '134', '141', '147', '154', '161', '167', '174', '181', '187', '194', '201', '207', '214', '221'],
			'{t6}': [null, '36', '37', '38', '39', '40', '49', '50', '51', '54', '55', '63', '70', '72', '75', '88', '105', '110', '115', '120', '125', '130', '136', '141', '146', '152', '157', '163', '168', '173']
		}
	},
	"3421": {
		name: "Vengeance Blast (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '64', '70', '74', '84', '90', '116', '123', '127', '132', '136', '162']
		}
	},
	"3352": {
		name: "Goddess Relic EX (PVP)",
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
			'{t5}': [null, '50'],
			'{t6}': [null, '10'],
			'{t7}': [null, '10']
		}
	},
	"3505": {
		name: "Cure Relic EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cure Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Cure Relic's range. Cures you of status effects when casted and knocks back enemies.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '']
		}
	},
	"3309": {
		name: "Class Mastery II (PVP)",
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
			'{t5}': [null, '1'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"3426": {
		name: "Wand Mastery (PVP)",
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
		name: "Paralyze Bolt (PVP)",
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
			'{t6}': [null, '75', '80', '85', '90', '95', '128', '138', '143', '149', '166', '207', '245', '259', '278', '293', '356', '372', '389', '399', '405', '464', '470', '476', '482', '489', '548', '554']
		}
	},
	"3308": {
		name: "Falling Angel EX (PVP)",
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
		name: "Lightning Relic EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lightning Relic Lv. 1<br>Priest SP Total 65 or above<br>SP {t4}",
			'effect': "Constantly generates an electrical field near the Lightning Relic.<br><color_y>Electrical Field Damage: {t5}% of Magic Damage</color_y>",
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
		name: "Holy Shield (PVP)",
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
			'{t5}': [null, '15.0']
		}
	},
	"3036": {
		name: "Redemption Aura (PVP)",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '300']
		}
	},
	"3214": {
		name: "Iron Will (PVP)",
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
			'{t5}': [null, '53'],
			'{t6}': [null, '53'],
			'{t7}': [null, '13']
		}
	},
	"3202": {
		name: "Charitable Zap (PVP)",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '286', '300', '314', '348', '367', '525', '557', '602', '636', '670', '846', '888', '912', '927', '943', '1109', '1125'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100'],
			'{t8}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7']
		}
	},
	"3003": {
		name: "Aura of Healing (PVP)",
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
			'{t2}': ['66', '66', '66', '66'],
			'{t3}': ['45', '17', '22'],
			'{t4}': ['3', '1', '1'],
			'{t5}': [null, '0.8', '1.1', '1.5']
		}
	},
	"3359": {
		name: "Class Mastery II (PVP)",
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
		name: "Bind Relic (PVP)",
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
			'{t6}': [null, '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t7}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t8}': [null, '60', '55', '50', '45', '40', '39', '38', '37', '36', '35']
		}
	},
	"3425": {
		name: "Mind Snapper (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '61', '64', '69', '73', '81', '108', '119', '128', '137', '146', '170', '174', '178']
		}
	}
});