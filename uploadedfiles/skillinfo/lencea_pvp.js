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
		name: "Charging Sweep EX (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Charging Sweep Lv. 1<br>SP {t4}",
			'effect': "Unleashes an additional shockwave when dealing an upward strike.<br><color_y>Shockwave Damage: {t5}%<br>If you cancel while charging, Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '15']
		}
	},
	"7110": {
		name: "Charging Sweep + Instance (PVP)",
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
		name: "Class Mastery (PVP)",
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
		name: "Stab Tug (PVP)",
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
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '115', '116', '117', '118', '119', '122', '123', '123', '124', '125', '129', '130', '131', '132', '133', '136', '137', '138', '139', '140']
		}
	},
	"7030": {
		name: "Twirling Chop (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '355', '367', '379', '391', '403', '470', '484', '497', '510', '523', '591', '604', '618', '632', '646', '718', '733'],
			'{t6}': [null, '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2', '0.2']
		}
	},
	"7201": {
		name: "Dance of Light (PVP)",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '128', '138', '148', '160', '176', '213'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10']
		}
	},
	"7036": {
		name: "Twirl Trance (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '168', '181', '187', '215', '225', '266', '279', '293', '308', '323', '374', '393', '413', '435', '459'],
			'{t6}': [null, '16.8', '18.1', '18.7', '21.5', '22.5', '26.6', '27.9', '29.3', '30.8', '32.3', '37.4', '39.3', '41.3', '43.5', '45.9'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7006": {
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
	"7009": {
		name: "Counter Spin (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"7203": {
		name: "Lingering Swing EX (PVP)",
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
		name: "Piercing Spike EX (PVP)",
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
		name: "Class Mastery (PVP)",
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
			'{t5}': [null, '1'],
			'{t6}': [null, '5'],
			'{t7}': [null, '5']
		}
	},
	"7104": {
		name: "Stab Tug EX (PVP)",
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
			'{t6}': [null, '10'],
			'{t7}': [null, '15']
		}
	},
	"7204": {
		name: "Spear of Light EX (PVP)",
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
		name: "Piercing Spike (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '75', '76', '76', '77', '78', '82', '84', '85', '86', '87', '92', '93', '94', '95', '96', '101', '103', '104'],
			'{t7}': [null, '75', '76', '76', '77', '78', '82', '84', '85', '86', '87', '92', '93', '94', '95', '96', '101', '103', '104']
		}
	},
	"7028": {
		name: "Martial Spirit (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '3'],
			'{t7}': [null, '10'],
			'{t8}': [null, '25'],
			'{t9}': [null, '25'],
			'{t10}': [null, '5']
		}
	},
	"7202": {
		name: "Vengeance from Above (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '583', '597', '612', '626', '641', '710', '727', '744', '762', '781', '801', '821', '842']
		}
	},
	"7105": {
		name: "Spinning Takedown EX (PVP)",
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
			'{t5}': [null, '100'],
			'{t6}': [null, '200']
		}
	},
	"7012": {
		name: "Flee (PVP)",
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
		name: "Copter Strike (PVP)",
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
			'{t5}': [null, 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 109%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 109%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 110%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 110%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon above your head to deal continuous damage. Press the <color_y>regular attack</color_y><color_w> button while using the skill to perform a quick forward strike.<br></color_w><color_y>Damage: 111%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 116%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 117%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 121%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 123%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 125%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 134%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 137%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 140%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 144%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 148%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 163%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>', 'Spin your weapon overhead to deal continuous damage. Press the <color_r>egular attack</color_r><color_w> button while using this skill to perform a quick forward strike.<br></color_w><color_y>Damage: 169%<br><br></color_y><color_y>(Enhancement Effect)<br></color_y><color_w>You will be able to draw enemies toward you when spinning your weapon.<br>Additional Dash and Slash Damage: 25%</color_w>']		}
	},
	"7014": {
		name: "Hornet's Touch (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '117', '118', '120', '121', '122', '128', '130', '131', '132', '134', '142', '143', '145', '147', '148', '156', '158', '160', '161', '163', '172', '174', '176', '178', '180']
		}
	},
	"7004": {
		name: "High Kick (PVP)",
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
		name: "Class Mastery II (PVP)",
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
			'{t4}': ['0'],
			'{t5}': [null, '32'],
			'{t6}': [null, '5']
		}
	},
	"7033": {
		name: "Circle of Spears (PVP)",
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
			'{t2}': ['23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23', '23'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '199', '202', '204', '206', '208', '210', '212', '214', '216', '218', '220'],
			'{t6}': [null, '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110']
		}
	},
	"7038": {
		name: "Champagne (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Buff",
			'element': "Light",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirl Trance Lv. 1<br>Lencea SP Total 45 or above<br>SP {t4}",
			'effect': "Twirl your spear quickly to continuously damage enemies and gather magical energy, which then explodes in a massive frontal attack. The lingering magic creates a buff that increases your Light Attack.<br><color_y>Light Magic<br>Damage: {t5}%<br><br></color_y><color_w>Buff<br></color_w><color_y>Light Attack: +{t6}%<br>Only applies to caster while in range.<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '691', '835'],
			'{t6}': [null, '25', '25'],
			'{t7}': [null, '15', '15']
		}
	},
	"7210": {
		name: "Twirl Trance + Instance (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"7031": {
		name: "Stalwart Spirit (PVP)",
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
			'{t2}': ['30', '30'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '3'],
			'{t7}': [null, '10'],
			'{t8}': [null, '22'],
			'{t9}': [null, '5']
		}
	},
	"7106": {
		name: "Twirling Thrust EX (PVP)",
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
		name: "Twirling Thrust (PVP)",
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
			'{t2}': ['36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36', '36'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5', '0.5'],
			'{t6}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t7}': [null, '123', '124', '125', '127', '128', '134', '136', '137', '138', '140', '146', '148', '149', '151', '152'],
			'{t8}': [null, '123', '124', '125', '127', '128', '134', '136', '137', '138', '140', '146', '148', '149', '151', '152'],
			'{t9}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"7037": {
		name: "Leap (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Twirling Thrust Lv. 1<br>Lencea SP Total 45 or above<br>SP {t4}",
			'effect': "Spear-vault into the air, then slam black down, temporarily exposing your enemies' weaknesses.<br><color_y>Damage: {t5}%<br><br></color_y><color_w></color_w><color_y>Weak Spot</color_y><color_w><br></color_w><color_y>Duration: {t6} sec</color_y><color_w><br><br>Defense: </color_w><color_y>-{t7}%</color_y><color_w></color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '779', '943'],
			'{t6}': [null, '5', '5'],
			'{t7}': [null, '5', '5']
		}
	},
	"7208": {
		name: "Vengeance from Above EX (PVP)",
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
			'{t6}': [null, '200']
		}
	},
	"7017": {
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
	"7008": {
		name: "Criss Cross Cut (PVP)",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 131%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 132%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 133%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 134%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 135%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 141%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 142%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 143%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 144%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 145%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 154%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 155%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 157%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 163%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 166%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 178%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 181%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 184%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 187%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 190%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 204%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 208%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 212%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 216%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 221%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 240%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 246%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>', 'Slash right, then left, as you step forward. Ends with a downward thrust that knocks down enemies.<br><color_y>Damage: 252%<br><br></color_y><color_w>(Enhancement Effect)<br></color_w><color_y>Able to slash knocked-down enemies. A downward thrust will launch enemies higher in the air.<br>Additional Damage: 25%</color_y>']		}
	},
	"7209": {
		name: "Class Mastery II (PVP)",
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
		name: "Forceful Bounce (PVP)",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '191', '193', '195', '196', '198', '214', '216', '218', '220', '223', '240', '242', '245', '247', '250', '266', '269', '272', '275', '277', '295'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7001": {
		name: "Slice (PVP)",
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
			'{t5}': [null, '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '117', '119', '121', '132', '143', '148', '152', '156', '161', '176', '181', '187', '194', '201', '224', '233', '244', '255']
		}
	},
	"7022": {
		name: "Lingering Swing (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '11.4', '11.5', '11.6', '11.8', '12.0', '13.1', '13.5', '13.7', '14.0', '14.9', '16.5', '17.1', '17.5', '17.9', '18.4', '20.4', '20.9', '21.4', '22.0', '22.7', '25.2'],
			'{t6}': [null, '11.4', '11.5', '11.6', '11.8', '12.0', '13.1', '13.5', '13.7', '14.0', '14.9', '16.5', '17.1', '17.5', '17.9', '18.4', '20.4', '20.9', '21.4', '22.0', '22.7', '25.2'],
			'{t7}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"7010": {
		name: "Flip Kick (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"7032": {
		name: "Double Somersault (PVP)",
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
			'{t5}': [null, '267', '269', '274', '278', '281', '310', '316', '321', '326', '331', '358', '363', '369', '376', '382', '414', '422']
		}
	},
	"7103": {
		name: "Forceful Bounce EX (PVP)",
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
		name: "Twirl Trance EX (PVP)",
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
			'{t7}': [null, '25'],
			'{t8}': [null, '25'],
			'{t9}': [null, '8']
		}
	},
	"7015": {
		name: "Aerial Evasion (PVP)",
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
		name: "Headbutt (PVP)",
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
			'{t5}': [null, '103', '105', '107', '109', '110', '119', '122', '124', '128', '131', '142', '145', '148', '152', '156', '168', '173', '178']
		}
	},
	"7005": {
		name: "Forward Pierce (PVP)",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '119', '120', '121', '122', '126', '129', '130', '131', '134', '135', '142', '149', '152', '155', '172', '194', '200', '207', '213', '220', '247', '255', '265', '275', '286', '324', '338', '353', '370']
		}
	},
	"7102": {
		name: "Charging Sweep (PVP)",
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
			'{t5}': [null, '338', '346', '353', '361', '369', '407', '416', '425', '434', '443', '453', '463', '473'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1']
		}
	},
	"7019": {
		name: "Harmonize (PVP)",
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
			'{t5}': [null, '10'],
			'{t6}': [null, '300']
		}
	},
	"7025": {
		name: "Spear of Light (PVP)",
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
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '138', '139', '140', '141', '142', '149', '150', '151', '153', '154', '162', '164', '165', '166', '167', '176', '177', '179', '180', '182'],
			'{t6}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"7023": {
		name: "Spear Reflect (PVP)",
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
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['17', '22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '110', '111', '113', '114', '116', '123', '124', '126', '128', '129', '137', '139', '141']
		}
	},
	"7003": {
		name: "Poke (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"7035": {
		name: "Flag Salute (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '130', '131', '132', '133', '135', '145', '146', '147', '149']
		}
	},
	"7101": {
		name: "Backflip Pierce (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '172', '177', '182', '187', '193', '209'],
			'{t6}': [null, '0.3', '0.3', '0.3', '0.3', '0.3', '0.3'],
			'{t7}': [null, '300', '300', '300', '300', '300', '300']
		}
	},
	"7021": {
		name: "Erratic Power (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Spear",
			'cast': "Active Toggle",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Lencea SP Total 20 or above<br>SP {t4}",
			'effect': "Increases your stats. You'll continuously gain <color_v>power</color_v><color_w> while the skill is active until you reach the max amount, then you'll become </color_w><color_y>lethargic</color_y><color_w>.<br></color_w><color_y>Grants {t6} </color_y><color_v>power</color_v><color_y> every {t5} sec while the skill is active. (Power cannot be restored).<br>Movement Speed and Action Speed: +{t7}%<br>Final Damage: +{t8}%<br><br></color_y><color_w>Power<br></color_w><color_y>Up to {t9}<br>Restores {t11} power every {t10} sec naturally.<br><br></color_y><color_w>Lethargy<br></color_w><color_y>Action Speed and Movement Speed: -{t12}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['15'],
			'{t4}': ['10'],
			'{t5}': [null, '2'],
			'{t6}': [null, '1'],
			'{t7}': [null, '10'],
			'{t8}': [null, '12'],
			'{t9}': [null, '10'],
			'{t10}': [null, '1'],
			'{t11}': [null, '1'],
			'{t12}': [null, '30']
		}
	},
	"7002": {
		name: "Flash Lift (PVP)",
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
			'{t5}': [null, '104', '105', '106', '108', '109', '116', '117', '120', '126', '130', '141', '144', '148', '152', '157', '173', '179', '186']
		}
	},
	"7013": {
		name: "Swoop (PVP)",
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
			'{t5}': [null, '150']
		}
	},
	"7016": {
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
	"7018": {
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
	"7026": {
		name: "Rushing Strike (PVP)",
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
			'{t5}': [null, '107', '108', '109', '110', '111', '114', '115', '116', '117', '118', '122', '123']
		}
	},
	"7027": {
		name: "Spinning Takedown (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '173', '174', '175', '177', '178', '187', '189', '190', '192', '193', '202', '204', '205', '207', '208', '218', '220', '221'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '346', '349', '351', '354', '356', '374', '378', '380', '383', '386', '405', '408', '410', '413', '416', '436', '439', '442'],
			'{t8}': [null, '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5', '3.5'],
			'{t9}': [null, '520', '523', '526', '530', '534', '561', '566', '570', '575', '579', '607', '611', '616', '620', '624', '654', '659', '664'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	}
});