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
	"7108": {
		name: "Charging Sweep EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charging Sweep Lv. 1<br>SP {t4}",
			'effect': "Enhances <color_y>Charging Sweep</color_y><color_w> to increase its charging distance and activate an additional shockwave.<br><br>When canceled within {t5}m:<br></color_w><color_y>Shockwave Damage: {t6}%<br><br></color_y><color_w>When canceled within {t7}m:<br></color_w><color_y>Shockwave Damage: {t8}%<br><br></color_y><color_w>When canceled at the max distance:<br></color_w><color_y>Shockwave Damage: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '5'],
			'{t6}': [null, '15'],
			'{t7}': [null, '10'],
			'{t8}': [null, '30'],
			'{t9}': [null, '100']
		}
	},
	"7110": {
		name: "Charging Sweep + Instance",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Charging Sweep can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"7207": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Increases your Damage by <color_y>{t6}%</color_y><color_w> for </color_w><color_y>{t5} sec</color_y><color_w> when a magic attack succeeds.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '2'],
			'{t6}': [null, '30']
		}
	},
	"7024": {
		name: "Stab Tug",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Forceful Bounce Lv. 1<br>Lencea SP Total 25 or above<br>SP {t4}",
			'effect': "Stab forward, attacking enemies, then tug your weapon back to draw them towards you.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '572', '583', '593', '603', '614', '698', '709', '719', '729', '740', '824', '835', '845', '855', '866', '950', '961', '971', '982', '992']
		}
	},
	"7030": {
		name: "Twirling Chop",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spinning Takedown Lv. 1<br>Lencea SP Total 35 or above<br>SP {t4}",
			'effect': "Jump and charge forward in a twirl as you slash enemies, ending with a strong downward chop that launches nearby enemies.<br><color_y>Damage: {t5}%<br>Invincibility: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '926', '963', '1001', '1039', '1076', '1278', '1316', '1354', '1391', '1429', '1631', '1668', '1706', '1744', '1782', '1983', '2021'],
			'{t6}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3', '0.3']
		}
	},
	"7201": {
		name: "Dance of Light",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Debuff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Champagne Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Fire a <color_y>Magic Sphere</color_y><color_w> and command all nearby </color_w><color_y>Enhanced Magic Afterimages</color_y><color_w> to attack. </color_w><color_y>Magic Sphere</color_y><color_w> explodes upon contact and reduces enemy's </color_w><color_y>Elemental Resistance</color_y><color_w>, making them the target. (Only hits one enemy.)<br></color_w><color_y>Light<br>Damage: {t5}%<br>Elemental Resistance -{t6}% <br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '797', '858', '919', '980', '1040', '1228'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10']
		}
	},
	"7036": {
		name: "Twirl Trance",
		changeskill: "7210",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Double Somersault Lv. 1<br>Lencea SP Total 40 or above<br>SP {t4}",
			'effect': "Twirl your spear to gather energy, then swing it, releasing an afterimage that deals consecutive damage.<br><color_y>Damage: {t5}%<br><br></color_y><color_w>Magical Afterimage<br></color_w><color_y>Damage per Hit: {t6}%<br>Duration: {t7} sec<br>Can deal up to {t8} hits.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '522', '537', '552', '567', '582', '662', '676', '691', '706', '721', '801', '816', '831', '846', '860'],
			'{t6}': [null, '52.2', '53.7', '55.2', '56.7', '58.2', '66.2', '67.6', '69.1', '70.6', '72.1', '80.1', '81.6', '83.1', '84.6', '86.0'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7006": {
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
	"7009": {
		name: "Counter Spin",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the <color_y>regular attack</color_y><color_w> button when knocked down to get back on your feet and blast enemies away.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"7203": {
		name: "Lingering Swing EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lingering Swing Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Lingering Swing</color_y><color_w> to fire an enhanced afterimage with a longer duration. Press the </color_w><color_y>special attack button</color_y><color_w> to launch a boomerang afterimage. <br></color_w><color_y>Light Magic<br>Lingering Swing Damage: +{t5}%<br><br></color_y><color_w>Enhanced Afterimage<br></color_w><color_y>Damage per Hit: +{t6}%<br>On impact, deals the same damage as all previous afterimages combined.<br>Duration: {t7} sec<br><br></color_y><color_w>Boomerang Afterimage<br></color_w><color_y>Same as Enhanced Afterimage's Damage<br>Can hit up to {t8} times</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30'],
			'{t6}': [null, '30'],
			'{t7}': [null, '8'],
			'{t8}': [null, '10']
		}
	},
	"7205": {
		name: "Piercing Spike EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Piercing Spike Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Piercing Spike</color_y><color_w>. Press the </color_w><color_y>regular attack button</color_y><color_w> right after using the skill to fire an additional magical spear.<br></color_w><color_y>Light Magic<br>Additional Magical Spear Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '100']
		}
	},
	"7107": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Grants a <color_y>{t5}%</color_y><color_w> chance to expose the weaknesses of an attacked enemy for </color_w><color_y>{t6} sec</color_y><color_w>.<br><br></color_w>#Physical Defense: ?P<color_y>-{t7}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"7104": {
		name: "Stab Tug EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stab Tug Lv. 1<br>Forceful Bounce EX Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Stab Tug</color_y><color_w> by increasing its range and reducing the Critical Resist of attacked enemies. Additional stabs deal more Super Armor Damage to enemies.<br></color_w><color_y>Stab Tug Damage: +{t5}%<br>Increases Super Armor Damage to center<br>Enemy Critical Resist: -{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20'],
			'{t7}': [null, '15']
		}
	},
	"7204": {
		name: "Spear of Light EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lingering Swing EX Lv. 1<br>Spear of Light Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Spear of Light</color_y><color_w> by increasing its range and damage. <br></color_w><color_y>Light Magic<br>Spear of Light Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30']
		}
	},
	"7029": {
		name: "Piercing Spike",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spear of Light Lv. 1<br>Lencea SP Total 30 or above<br>SP {t4}",
			'effect': "Jump, then throw a magical spear to the ground, which will deal damage and then explode after <color_y>{t5} sec</color_y><color_w>.<br></color_w><color_y>Damage: {t6}%<br></color_y><color_y>Explosion Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t6}': [null, '231', '234', '237', '240', '243', '269', '272', '275', '278', '281', '307', '310', '313', '316', '320', '345', '348', '351'],
			'{t7}': [null, '231', '234', '237', '240', '243', '269', '272', '275', '278', '281', '307', '310', '313', '316', '320', '345', '348', '351']
		}
	},
	"7028": {
		name: "Martial Spirit",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Erratic Power Lv. 1<br>Lencea SP Total 30 or above<br>SP {t4}",
			'effect': "Creates a red magic circle that increases your attack damage. <br><color_y>Grants {t5} </color_y><color_v>Power</color_v><color_y> when used.<br>Magic Circle Range: {t6}m<br>Magic Circle Duration: {t7} sec</color_y><color_w><br><br>Buff Effect<br></color_w><color_y>Damage: +{t8}%<br>Damage: +{t9}%<br>Buff Duration: {t10} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '3'],
			'{t7}': [null, '10'],
			'{t8}': [null, '50'],
			'{t9}': [null, '50'],
			'{t10}': [null, '5']
		}
	},
	"7202": {
		name: "Vengeance from Above",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dance of Light Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Summons a heavenly spear to drill into the ground in front of you, drawing in nearby enemies. Release the summoned spear to launch enemies. <br><color_y>Light Magic<br>Damage: {t5}% + {1}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2120', '2166', '2212', '2258', '2304', '2550', '2596', '2642', '2688', '2734', '2780', '2826', '2872']
		}
	},
	"7105": {
		name: "Spinning Takedown EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Spinning Takedown Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Spinning Takedown</color_y><color_w> to further increase its damage based on how long you charge energy for. Press the </color_w><color_y>special attack button</color_y><color_w> while charging to launch enemies.<br><br>(1st Charge)<br></color_w><color_y>{t5}% of Spinning Takedown Damage<br><br></color_y><color_w>(2nd Charge)<br></color_w><color_y>{t6}% of Spinning Takedown Damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '150'],
			'{t6}': [null, '300']
		}
	},
	"7012": {
		name: "Flee",
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
	"7011": {
		name: "Copter Strike",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 305%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 317%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 328%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 340%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 351%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 426%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 438%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 449%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 461%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 472%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 548%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 559%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 571%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 582%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 594%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 669%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 681%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>']		}
	},
	"7014": {
		name: "Hornet's Touch",
		d1: {
			'lvl': '{n}',
			'weapon': "Bracelet",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Assume a defense stance. When attacked, instantly charge forward in a counterattack. <color_y>Jump</color_y><color_w> during any attack to activate this skill.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '229', '237', '245', '254', '262', '310', '318', '327', '335', '343', '391', '400', '408', '416', '424', '473', '481', '489', '497', '505', '554', '562', '570', '578', '586']
		}
	},
	"7004": {
		name: "High Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> to push enemies back with a high front kick.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"7109": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Charging Sweep EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Rushing Strike</color_y><color_w>, </color_w><color_y>Charging Sweep EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Rushing Strike</color_y><color_w> hits, restore </color_w><color_y>Charging Sweep EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Charging Sweep and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '32'],
			'{t6}': [null, '5']
		}
	},
	"7033": {
		name: "Circle of Spears",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 35 or above<br>SP {t4}",
			'effect': "Slam the ground with your spear to push enemies back and summon 8 magic spears. Press the <color_y>regular attack button</color_y><color_w> to fire the summoned magic spears in all directions.<br></color_w><color_y>Damage: {t5}%<br><br></color_y><color_w>Magic Spear<br></color_w><color_y>Damage per Spear: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '166', '172', '178', '183', '189', '213', '218', '223', '228', '233', '254'],
			'{t6}': [null, '83', '86', '89', '92', '95', '106', '109', '111', '114', '116', '127']
		}
	},
	"7038": {
		name: "Champagne",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirl Trance Lv. 1<br>Lencea SP Total 45 or above<br>SP {t4}",
			'effect': "Twirl your spear quickly to continuously damage enemies and gather magical energy, which then explodes in a massive frontal attack. The lingering magic creates a buff that increases your Light Attack.<br><color_y>Light Magic<br>Damage: {t5}%<br><br></color_y><color_w>Buff<br></color_w><color_y>Light Attack: +{t6}%<br>Only applies to self.<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '2212', '2726'],
			'{t6}': [null, '25', '25'],
			'{t7}': [null, '15', '15']
		}
	},
	"7210": {
		name: "Twirl Trance + Instance",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Twirl Trance can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"7031": {
		name: "Stalwart Spirit",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Martial Spirit Lv. 1<br>Lencea SP Total 35 or above<br>SP {t4}",
			'effect': "Creates a blue magic circle that reduces the damage you take.<br><color_y>Grants {t5} </color_y><color_v>Power</color_v><color_y> when used.<br>Magic Circle Range: {t6}m<br>Magic Circle Duration: {t7} sec</color_y><color_w><br><br>Buff Effect<br></color_w><color_y>All Damage Taken: -{t8}%<br>Buff Duration: {t9} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '3'],
			'{t7}': [null, '10'],
			'{t8}': [null, '32'],
			'{t9}': [null, '5']
		}
	},
	"7106": {
		name: "Twirling Thrust EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirling Thrust Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Twirling Thrust</color_y><color_w> to deal 2 additional thrusts. Reduces the skill's cooldown by 5 seconds during the last thrust and increases the attack range of the final thrust.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '']
		}
	},
	"7034": {
		name: "Twirling Thrust",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirling Chop Lv. 1<br>Lencea SP Total 40 or above<br>SP {t4}",
			'effect': "Perform a twirl-thrust as you move forward, drawing enemies toward you. You'll adopt a ready stance at the end. You can deal additional hits in this stance. If you hold the stance for at least {t5} sec, you'll reduce the skill's cooldown by {t6} sec.<br><br>Additional Hits During Stance<br><color_y>(Regular Attack Button): </color_y><color_w>Perform one more twirl-thrust and then adopt the ready stance again. Can be performed up to two times. The skill's cooldown will decrease by 2 more seconds during the last twirl-thrust.<br></color_w><color_y>Damage: {t7}%<br>(Special Attack Button): </color_y><color_w>Gather energy, then slash enemies in front to blow them away. Damage will increase based on the number of twirl-thrusts you've performed.<br></color_w><color_y>Damage: {t8}%<br>Damage per Twirl-thrust: +{t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26', '26'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '407', '421', '435', '448', '462', '535', '549', '563', '577', '590', '664', '677', '691', '705', '718'],
			'{t8}': [null, '407', '421', '435', '448', '462', '535', '549', '563', '577', '590', '664', '677', '691', '705', '718'],
			'{t9}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"7037": {
		name: "Leap",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirling Thrust Lv. 1<br>Lencea SP Total 45 or above<br>SP {t4}",
			'effect': "{t5}",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, "Spear-vault into the air, then slam black down, temporarily exposing your enemies' weaknesses.<br><color_y>Damage: 5841%<br><br></color_y><color_w>Weak Spot<br></color_w><color_y>Duration: 5 sec</color_y><color_w><br><br>Defense: </color_w><color_y>-5%</color_y><color_w></color_w>", "Spear-vault into the air, then slam black down, temporarily exposing your enemies' weaknesses.<br><color_y>Damage: 7232%<br><br></color_y><color_w></color_w><color_y>Weak Spot</color_y><color_w><br></color_w><color_y>Duration: 5 sec</color_y><color_w><br><br>Defense: </color_w><color_y>-5%</color_y><color_w></color_w>"]		}
	},
	"7208": {
		name: "Vengeance from Above EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Vengeance from Above Lv. 1<br>SP {t4}",
			'effect': "Enhances <color_y>Vengeance from Above</color_y><color_w>. Enemies from a wider range will be drawn towards the spear, and enemies will be launched higher than before. If a magic spear from </color_w><color_y>Piercing Spike EX</color_y><color_w> is nearby, the spear will explode immediately to deal greater damage to enemies.<br></color_w><color_y>Light Magic<br>Vengeance from Above Damage: +{t5}%<br>Piercing Spike EX Explosion Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '400']
		}
	},
	"7017": {
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
	"7008": {
		name: "Criss Cross Cut",
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
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 320%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 325%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 330%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 336%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 341%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 384%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 390%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 395%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 400%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 406%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 449%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 454%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 460%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 465%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 470%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 514%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 519%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 525%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 530%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 535%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 579%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 584%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 589%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 595%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 600%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 643%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 649%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 654%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>']		}
	},
	"7209": {
		name: "Class Mastery II",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirl Trance EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Circle of Spears</color_y><color_w>, </color_w><color_y>Twirl Trance EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Circle of Spears</color_y><color_w> hits, restore </color_w><color_y>Twirl Trance EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Twirl Trance and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '24'],
			'{t6}': [null, '5']
		}
	},
	"7020": {
		name: "Forceful Bounce",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 20 or above<br>SP {t4}",
			'effect': "Strike enemies in front, bouncing them into the air, then strike again for another bounce.<br><color_y>Damage: {t5}%<br>All Incoming Damage: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '626', '637', '648', '658', '669', '755', '766', '777', '787', '798', '884', '895', '906', '916', '927', '1013', '1024', '1034', '1045', '1056', '1142'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7001": {
		name: "Slice",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Swing your weapon, pushing enemies away.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '159', '165', '171', '177', '183', '211', '217', '223', '229', '235', '263', '269', '276', '282', '288', '316', '322', '328', '334', '340', '368', '374', '380', '387', '393', '421', '427', '433', '439']
		}
	},
	"7022": {
		name: "Lingering Swing",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 20 or above<br>SP {t4}",
			'effect': "Take a step back while swinging to shoot a <color_y>magical afterimage</color_y><color_w> at enemies. Press the </color_w><color_y>regular attack</color_y><color_w> button to shoot 2 more afterimages.<br></color_w><color_y>Damage: {t5}% <br><br></color_y><color_w>Magical Afterimage<br></color_w><color_y>Damage per Hit: {t6}% + {t8}<br>Duration: {t7} sec<br>Can fire up to {t8} afterimages.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '16.8', '17.4', '18.0', '18.7', '19.3', '24.4', '25.1', '25.7', '26.3', '27.0', '32.1', '32.8', '33.4', '34.0', '34.7', '39.8', '40.5', '41.1', '41.7', '42.4', '47.5'],
			'{t6}': [null, '16.8', '17.4', '18.0', '18.7', '19.3', '24.4', '25.1', '25.7', '26.3', '27.0', '32.1', '32.8', '33.4', '34.0', '34.7', '39.8', '40.5', '41.1', '41.7', '42.4', '47.5'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7010": {
		name: "Flip Kick",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> next to a stunned enemy to launch them into the air with a kick.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '146']
		}
	},
	"7032": {
		name: "Double Somersault",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Piercing Spike Lv. 1<br>Lencea SP Total 35 or above<br>SP {t4}",
			'effect': "Somersault forward twice, dealing damage to enemies. Press the <color_y>up arrow twice</color_y><color_w> or </color_w><color_y>Shift + up arrow</color_y><color_w> in the air to use the skill.<br></color_w><color_y>Light Magic<br>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1178', '1193', '1208', '1223', '1238', '1361', '1376', '1391', '1406', '1421', '1544', '1559', '1574', '1589', '1604', '1727', '1742']
		}
	},
	"7103": {
		name: "Forceful Bounce EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Forceful Bounce Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Forceful Bounce</color_y><color_w> by increasing its damage and the range of its last hit.<br></color_w><color_y>Forceful Bounce Damage: +30%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '']
		}
	},
	"7206": {
		name: "Twirl Trance EX",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirl Trance Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances <color_y>Twirl Trance</color_y><color_w> to fire an additional afterimage and then an enhanced afterimage with a longer duration. Press the </color_w><color_y>regular attack button</color_y><color_w> after Twirl Trance to fire it. <br></color_w><color_y>Light Magic<br>Additional Twirl Trance Damage: {t5}%<br><br></color_y><color_w>Additonal Afterimage<br></color_w><color_y>Damage: Same as regular afterimages.<br>Duration: {t6} sec<br><br></color_y><color_w>Additional Enhanced Afterimage<br></color_w><color_y>Damage: {t7}% of regular afterimages<br>{t8}% of all previous afterimages combined.<br>Duration: {t9} sec </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '8'],
			'{t7}': [null, '50'],
			'{t8}': [null, '50'],
			'{t9}': [null, '8']
		}
	},
	"7015": {
		name: "Aerial Evasion",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "When launched into the air, press <color_y>jump</color_y><color_w> to land on your feet.<br></color_w><color_y>Cooldown: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18'],
			'{t3}': ['14'],
			'{t4}': ['5'],
			'{t5}': [null, '18']
		}
	},
	"7007": {
		name: "Headbutt",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>High Kick Lv. 1<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> during </color_w><color_y>High Kick</color_y><color_w> to headbutt enemies.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['4', '9', '14', '19', '24', '29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79', '84', '89'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '107', '111', '115', '119', '123', '141', '146', '150', '154', '158', '176', '180', '184', '188', '193', '211', '215', '219']
		}
	},
	"7005": {
		name: "Forward Pierce",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Charge forward with great force, piercing enemies in your path.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '185', '189', '192', '196', '199', '228', '232', '235', '239', '242', '271', '275', '279', '282', '286', '315', '318', '322', '325', '329', '358', '361', '365', '368', '372', '401', '405', '408', '412']
		}
	},
	"7102": {
		name: "Charging Sweep",
		changeskill: "7110",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Backflip Pierce Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Charge forward and sweep enemies into the air, creating a shockwave. Press the <color_y>regular attack button</color_y><color_w> to immediately activate the sweep. The shockwave's damage depends on the length of your charge. <br></color_w><color_y>Damage: {t5}%<br>If you cancel while charging, Damage: {t6}%<br>Damage per hit while charging: {t7}% (up to 8 hits)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1251', '1282', '1313', '1344', '1375', '1540', '1571', '1602', '1633', '1663', '1694', '1725', '1756'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"7019": {
		name: "Harmonize",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Increases your own and your allies’ attack and movement speeds.<br><color_y>Attack Speed and Movement Speed: +{t5}%<br></color_y><color_y>Duration: {t6} sec </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['35'],
			'{t4}': ['0'],
			'{t5}': [null, '15'],
			'{t6}': [null, '300']
		}
	},
	"7025": {
		name: "Spear of Light",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lingering Swing Lv. 1<br>Lencea SP Total 25 or above<br>SP {t4}",
			'effect': "Fire a spear of light that explodes when it hits an enemy, dealing damage to all nearby enemies and knocking down the enemy hit. Press the <color_y>regular attack button</color_y><color_w> during the attack to manually activate the explosion.<br></color_w><color_y>Damage: {t5}%<br>Additional Damage to Center: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '410', '418', '425', '432', '439', '497', '504', '511', '518', '525', '583', '590', '597', '604', '611', '669', '676', '683', '690', '697'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"7023": {
		name: "Spear Reflect",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 20 or above<br>SP {t4}",
			'effect': "Press the <color_y>special attack button</color_y><color_w> when you're being hit to push nearby enemies back.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['17', '22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '172', '182', '191', '201', '211', '255', '265', '274', '284', '294', '338', '347', '357']
		}
	},
	"7003": {
		name: "Poke",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> on a downed enemy to stab twice and kick it away.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '135']
		}
	},
	"7035": {
		name: "Flag Salute",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stalwart Spirit Lv. 1<br>Lencea SP Total 40 or above<br>SP {t4}",
			'effect': "Perch at the top of your weapon to evade enemy attacks. Press the <color_y>regular attack button</color_y><color_w> to jump down, strike the ground, and launch enemies. Press the </color_w><color_y>special attack button</color_y><color_w> instead to jump forward and dodge enemy attacks.<br>You can also activate this skill by pressing the </color_w><color_y>Jump button</color_y><color_w> during Tumble.<br></color_w><color_y>Grants {t5} </color_y><color_v>Power</color_v><color_y> when used.<br>Damage: {t6}%<br>Invincible while mounting the weapon.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '271', '277', '283', '289', '295', '349', '355', '361', '367']
		}
	},
	"7101": {
		name: "Backflip Pierce",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Leap Lv. 1<br>Lancer SP Total 65 or above<br>SP {t4}",
			'effect': "Kick enemies before performing a backflip to dodge their attacks. Then, charge forward to counterattack with your spear. Deals Critical Damage to enemies who've had their Weak Spots revealed. <br><color_y>Damage: {t5}%<br>Invincibility: {t6} sec<br><br></color_y><color_w>When attacking an enemy with a Weak Spot:<br></color_w><color_y>Additional Damage: {t7}%<br>Kicks and launches the enemy into the air</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1194', '1259', '1324', '1390', '1455', '1656'],
			'{t6}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3'],
			'{t7}': [null, '500', '500', '500', '500', '500', '500']
		}
	},
	"7021": {
		name: "Erratic Power",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 20 or above<br>SP {t4}",
			'effect': "Increases your stats. You'll continuously gain <color_v>power</color_v><color_w> while the skill is active until you reach the max amount, then you'll become </color_w><color_y>lethargic</color_y><color_w>.<br></color_w><color_y>Grants {t6} </color_y><color_v>power</color_v><color_y> every {t5} sec while the skill is active. (Power cannot be restored).<br>Movement Speed and Action Speed: +{t7}%<br>Final Damage: +{t8}%<br><br></color_y><color_w>Power<br></color_w><color_y>Up to {t9}<br>Restores {t11} power every {t10} sec naturally.<br><br></color_y><color_w>Lethargy<br></color_w><color_y>Movement Speed: -{t12}%<br>HP: -{t14}% per {t13} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '1'],
			'{t7}': [null, '17'],
			'{t8}': [null, '65'],
			'{t9}': [null, '10'],
			'{t10}': [null, '1'],
			'{t11}': [null, '1'],
			'{t12}': [null, '50'],
			'{t13}': [null, '2'],
			'{t14}': [null, '2']
		}
	},
	"7002": {
		name: "Flash Lift",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Swing your weapon upwards, launching enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '136', '146', '155', '165', '175', '228', '238', '247', '257', '266', '320', '329', '339', '349', '358', '412', '421', '431']
		}
	},
	"7013": {
		name: "Swoop",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press <color_y>special attack</color_y><color_w> while jumping to knock enemies back.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['10'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"7016": {
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
	"7018": {
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
	"7026": {
		name: "Rushing Strike",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 25 or above<br>SP {t4}",
			'effect': "Press the <color_y>regular attack button</color_y><color_w> during Tumble to charge forward and strike enemies twice with your weapon.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '14.5', '14', '13.5', '13', '12.5', '12', '11.5', '11', '10.5', '10', '9.5'],
			'{t3}': ['21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '216', '224', '232', '241', '249', '288', '296', '304', '313', '321', '360', '368']
		}
	},
	"7027": {
		name: "Spinning Takedown",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stab Tug Lv. 1<br>Lencea SP Total 30 or above<br>SP {t4}",
			'effect': "Lower your guard to gather energy before executing a powerful takedown. Press the <color_y>regular attack button</color_y><color_w> while gathering energy to attack enemies immediately. The longer you charge, the greater the takedown's range and power.<br><br>(1st Charge)<br></color_w><color_y>Damage: {t5}%<br>Attack Range: {t6}m<br><br></color_y><color_w>(2nd Charge)<br></color_w><color_y>Damage: {t7}%<br>Attack Range: {t8}m<br><br></color_y><color_w>(3rd Charge)<br></color_w><color_y>Damage: {t9}%<br>Attack Range: {t10}m</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '992', '1005', '1018', '1031', '1044', '1150', '1163', '1176', '1189', '1202', '1307', '1320', '1333', '1346', '1359', '1465', '1478', '1491'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '1984', '2010', '2036', '2062', '2088', '2299', '2325', '2351', '2377', '2403', '2614', '2640', '2666', '2692', '2718', '2930', '2955', '2981'],
			'{t8}': [null, '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5'],
			'{t9}': [null, '2976', '3015', '3054', '3093', '3132', '3449', '3488', '3527', '3566', '3605', '3922', '3961', '4000', '4038', '4077', '4394', '4433', '4472'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	}
});