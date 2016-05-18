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
	"7512": {
		name: "Dark Avenger (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Death Knell Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "Detonates charged <color_y>Fury</color_y><color_w> to transform into a </color_w><color_y>Dark Avenger</color_y><color_w>.<br></color_w><color_w>While transformed, your </color_w><color_v>Nightmare</color_v><color_w> skills hit harder and faster. </color_w><color_y>Critical</color_y><color_w> will increase as well.<br><br></color_w><color_y>Charge at least Fury x{t5} to use.<br>Critical: +{t6}<br>(Duration: {t7} sec)<br></color_y><color_y>Damage: {t8}%<br>Can be used in the air as well.<br><br></color_y><color_r>Consumes Fury x{t10} per {t9} sec. Transformation will end when you run out of Fury.</color_r>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '340', '520', '900', '1660', '3100', '5740'],
			'{t7}': [null, '600', '600', '600', '600', '600', '600'],
			'{t8}': [null, '300', '300', '300', '300', '300', '300'],
			'{t9}': [null, '1', '1', '1', '1', '1', '1'],
			'{t10}': [null, '1', '1', '1', '1', '1', '1']
		}
	},
	"7526": {
		name: "Attack Accelerator (B) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Inflicts </color_w><color_y>{t5}%</color_y><color_w> additional damage whenever you deal a </color_w><color_y>Critical</color_y><color_w> attack.<br><br></color_w><color_s>Exclusive Skill<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"354": {
		name: "Cyclone Slash EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Moonlight Splitter EX Lv. 1<br>Cyclone Slash Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Cyclone Slash's range and damage. Pulled enemy's Critical Resist is reduced.<br><color_y>Cyclone Slash Damage: +{t5}%<br>Critical Resist: -{t6}%<br>Debuff Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '50'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5']
		}
	},
	"218": {
		name: "Counter Cross (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Press the normal attack button while being attacked in the air to send out an X-shaped flying slash. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '188', '242', '274', '303', '335', '475', '498', '524', '551']
		}
	},
	"203": {
		name: "Cyclone Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Moonlight Splitter Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Swing your sword to send forth a cyclone to attack enemies in front of you. The cyclone lifts nearby enemies into the air. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '155', '158', '164', '167', '171', '207', '214', '242', '252', '268', '319', '332', '346', '360', '368', '419', '424', '429', '434']
		}
	},
	"417": {
		name: "Devastating Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Release a furious roar that stuns enemies and increases your Max HP.<br><color_y>Damage: {t5}%<br>Max HP: +{t6}%<br>HP Increase Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125', '125', '125', '50', '50'],
			'{t3}': ['36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '216', '288', '360', '432', '504', '576'],
			'{t6}': [null, '1', '2', '3', '4', '5', '6'],
			'{t7}': [null, '12', '20', '20', '20', '20', '20']
		}
	},
	"303": {
		name: "Coup de Grace (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Feint Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Knock the enemy down with a low blow and follow up with a powerful strike while they're on the ground. When enemy's HP is below {t5}%, deals additional damage for every {t7}% HP less than {t6}% of Max HP.<br><color_y>Damage: {t8}%<br>Bonus Damage: +{t10}% for Enemy HP down {t9}% </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t6}': [null, '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t8}': [null, '406', '426', '447', '468', '481', '555', '566', '577', '589', '601', '642', '666', '689'],
			'{t9}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t10}': [null, '3', '3', '3', '3', '3', '3', '4', '4', '4', '4', '4', '4', '4']
		}
	},
	"24": {
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
	"219": {
		name: "Parry (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword, Gauntlet",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Take up a <color_y>Parrying</color_y><color_w> stance. Unsuccessful counterattacks take long to recover from, but successful counterattacks deal high damage. Once you go into Parry, you cannot cancel it.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15'],
			'{t3}': ['22', '60'],
			'{t4}': ['10', '10'],
			'{t5}': [null, '500', '1000']
		}
	},
	"558": {
		name: "Maelstrom Howl EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Maelstrom Howl Lv. 1<br>SP {t4}",
			'effect': "Enhances Maelstrom Howl. Unleashes a damaging explosion.<br><color_y>Additional Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"559": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Crisis Howl Lv. 1<br>Class Mastery Lv. 1<br>Flying Swing EX Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Bombs Away</color_y><color_w>, </color_w><color_y>Flying Swing EX</color_y><color_w> temporarily becomes an instant skill. </color_w><color_y>Flying Swing EX</color_y><color_w>'s target must be distant. When </color_w><color_y>Crisis Howl</color_y><color_w> is activated, restore all skill cooldowns by {t5}%.<br><br></color_w><color_y>Damage: +{t6}% of Vitality<br>Flying Swing and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '20'],
			'{t6}': [null, '5']
		}
	},
	"358": {
		name: "Moon Blade Dance EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Moon Blade Dance Lv. 1<br>SP {t4}",
			'effect': "Enhances Moon Blade Dance. After slashing in mid-air, press <color_y>regular attack button</color_y><color_w> to launch another slash and land on the ground. <br></color_w><color_y>Additional Slash Damage: {t5}%<br></color_y><color_y>Landing Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '200'],
			'{t6}': [null, '50']
		}
	},
	"40": {
		name: "Death Knell (PVP)",
		changeskill: "41",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Vengeance Storm Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "<color_w>Transform into a </color_w><color_y>Dark Avenger</color_y><color_w>. Jump and shoot dozens of fire blades to the ground, then descend as you spin and attack.<br>Keep pressing the </color_w><color_y>Regular Attack Button</color_y><color_w> after the first hit to keep hitting. The damage of the final hit will increase depending on how long you charge the skill.<br><br></color_w><color_y>Can also be used in the air.<br>Total Projectiles: {t5}<br>Damage per Projectile: {t6}% (3 Hits)<br>Regular Final Hit Damage: {t7}%<br>Charged Final Hit Damage: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['225', '225', '225'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '11', '11'],
			'{t6}': [null, '110', '132'],
			'{t7}': [null, '200', '200'],
			'{t8}': [null, '500', '500']
		}
	},
	"9": {
		name: "Soccer Kick (PVP)",
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
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"15": {
		name: "Dropkick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button while jumping to launch an enemy into the air with your legs. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['4'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"308": {
		name: "Coup de Grace EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Coup de Grace Lv. 1<br>SP {t4}",
			'effect': "Enhances Coup de Grace. Plant your blade in the ground to deal damage to the enemy 2 times. The second explosion deals an additional {t5}% damage.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50']
		}
	},
	"7602": {
		name: "(Nightmare) Dark Stinger (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Enhances the attack's </color_w><color_y>additional hit.<br></color_y><color_y>Regular Attack Button: </color_y><color_w>Dash quickly and stab.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Summon a fire sword and launch enemies into the air.<br></color_w><color_y>Skill Damage: +{t5}%<br>Damage Taken: +{t6}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"206": {
		name: "Triple Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Dash forward while swinging your sword. Press the attack button to swing up to 3 times. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17', '17'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '87', '88', '90', '92', '95', '110', '120', '124', '129', '154', '190', '207', '219', '231', '244', '298', '303', '309', '315', '321', '327']
		}
	},
	"356": {
		name: "Halfmoon Slash EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Halfmoon Slash Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Halfmoon Slash's attack range and grants an additional slash. <br><color_y>Additional Hit Damage: {t5}% of Halfmoon Slash damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"7603": {
		name: "(Nightmare) Piercing Crescent (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Enhances fire blades and charges cooldown.<br><br></color_w><color_y>Cooldown: Charge {t5} time(s)<br>Skill's Damage: +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"305": {
		name: "Hacking Stance EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hacking Stance Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "While Hacking Stance is active, press the special attack button to lift enemies into the air. Cancels Hacking Stance. Also increases Hacking Stance's attack range.<br><color_y>Hacking Stance Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '15']
		}
	},
	"360": {
		name: "플래쉬 스탠스 인스턴트 (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "빠르게 사용가능한 플래쉬 스탠스입니다.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5', '1.5'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"221": {
		name: "Courageous Shout (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Summons a burst of energy with a shout to attack nearby enemies.<br>Also temporarily boosts your damage output.<br><color_y>Damage: {t5}%<br>All Damage: +{t6}%<br>Damage Buff Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '136', '142', '147', '155', '161', '186', '193', '200', '207', '214', '244'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5']
		}
	},
	"7532": {
		name: "Soul Cutter Instant (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Soul Cutter can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"416": {
		name: "Calamity Crush (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roll Attack Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "Jump into the air and then slam into the ground with great force, unleashing a powerful quake that knocks down enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '956', '1127']
		}
	},
	"414": {
		name: "Lifesaver (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "For {t5} sec, your HP can't drop below 1.<br><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['180', '180'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '5'],
			'{t6}': [null, '15']
		}
	},
	"302": {
		name: "Triple Slash EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Triple Slash Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Triple Slash's damage. Able to launch an attack by pressing the special attack button instead of the regular attack button.<br><color_y>Triple Slash Damage: +{t5}% </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"7517": {
		name: "Recovery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>After taking damage, </color_w><color_y>Super Armor </color_y><color_w>increases.<br><br></color_w><color_y>Minor Super Armor increase<br>Duration: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '3.75']
		}
	},
	"503": {
		name: "Bone Cleaver (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Overpower Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Jump into the air and slash down with bone-shattering force. Additional attacks deal extra damage. Temporarily converts Strength into Damage.<br><color_y>Damage: {t5}%<br>Damage per Hit: +{t6}<br>Damage from Strength: +{t7}%<br>Fracture Duration: {t8} sec<br>Additional Damage Duration: {t9} sec<br>Fury: +{t10}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '428', '448', '470', '492', '506', '592', '604', '616', '630', '643', '689', '716', '743'],
			'{t6}': [null, '20', '40', '60', '80', '100', '120', '140', '160', '180', '200', '220', '240', '260'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"28": {
		name: "Heavy Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Slashes down hard on an enemy. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '61', '62', '64', '66', '68', '75', '77', '79', '82', '84', '92', '99', '102', '105', '119', '139', '145', '151', '157', '164', '185', '188', '190', '193', '196', '215', '218', '221', '224']
		}
	},
	"411": {
		name: "Roll Attack (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bombs Away Lv. 1<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Roll through the air and then slam into the ground with great force, sending out a shock wave that deals damage to nearby enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '344', '394', '419', '514', '553', '736', '790', '846', '904', '963', '1176', '1205', '1237', '1269', '1303']
		}
	},
	"352": {
		name: "Moonlight Splitter EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Moonlight Splitter Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Moonlight Splitter's slash to become wider and last longer.<br><color_y>Moonlight Splitter Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"504": {
		name: "Demolition Fist EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Demolition Fist Lv. 1<br>Stomp EX Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Demolition Fist to perform a powerful downward strike. <br><color_y>Additional Strike: {t5}% of Demolition Fist damage<br>All Damage: +{t6}%<br>Duration: {t7} sec</color_y>",
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
	"7522": {
		name: "Defense Accelerator (B) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Max HP</color_y><color_w> will increase by </color_w><color_y>{t5}%</color_y><color_w>.<br><br></color_w><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"209": {
		name: "Crescent Cleave (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cyclone Slash Lv. 1<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Charge your sword with arcane energy to unleash {t5} magical beams on your enemies. <br><color_y>Damage per Beam: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '139', '145', '152', '171', '181', '256', '275', '301', '321', '342', '423', '448', '465', '477', '490', '567', '580']
		}
	},
	"554": {
		name: "Punishing Swing EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Punishing Swing Lv. 1<br>Flying Swing EX Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Punishing Swing to deploy a wide-ranged bomb to burn enemies. <br><color_y>Fire Magic<br>Punishing Swing Damage: +{t5}%<br>Burn Damage: {t6}% of Magic Damage per tick for 5 ticks</color_y>",
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
	"7521": {
		name: "Defense Accelerator (A) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Decreases </color_w><color_y>all damage taken</color_y><color_w> by </color_w><color_y>{t5}%</color_y><color_w>.<br><br></color_w><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"30": {
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
	"419": {
		name: "Soccer Kick Combo (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Soccer Kick Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Use a special attack after using <color_y>Soccer Kick/Dash Uppercut/3-hit Rising Slash</color_y><color_w> to strike an enemy down with a kick. This last attack will create a shock wave to damage nearby enemies. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '61', '65', '68', '74', '83', '105', '112', '119', '125', '129', '151', '155']
		}
	},
	"208": {
		name: "Moonlight Splitter (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Quickly swing your sword 3 times in charged attacks. <br><color_y>Damage (per swing): {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '52', '53', '54', '55', '57', '65', '69', '72', '74', '84', '102', '109', '114', '119', '125', '149', '152', '154', '157', '160', '163']
		}
	},
	"357": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "After dealing magic damage, your <color_y>Damage</color_y><color_w> is temporarily boosted based on your Intellect. Damage cannot be increased by more than {t5} times your damage.<br></color_w><color_y>Damage: +{t7} per {t6} INT<br>Duration: {t8} sec<br>Cannot be stacked.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '2'],
			'{t6}': [null, '1'],
			'{t7}': [null, '0.01'],
			'{t8}': [null, '5']
		}
	},
	"7530": {
		name: "Dark Tumble (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Tumble Lv. 1<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>(Tumble)</color_y><color_w> will be enhanced during your transformation into Dark Avenger, enabling you to move farther and use the skill in the air.<br><br></color_w><color_y>Consumes 1 Fury</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0.5', '0.5'],
			'{t3}': ['55'],
			'{t4}': ['3'],
			'{t5}': [null, '']
		}
	},
	"7525": {
		name: "Attack Accelerator (A) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Damage of all </color_w><color_y>airborne skills</color_y><color_w> will increase by </color_w><color_y>{t5}%</color_y><color_w>.<br><br></color_w><color_s>Exclusive Skill<br>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"215": {
		name: "Dash Combo (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dash Slash Lv. 1<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "After <color_y>Dash Slash</color_y><color_w>, use an attack or use an attack while tumbling to drag an enemy back for one more slash.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '106', '109', '113', '119', '124', '153', '164', '173', '182', '188', '217', '221', '226']
		}
	},
	"7510": {
		name: "Shadow Pact (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Imbue your party with fire energy, increasing your party members' </color_w><color_y>Fire Attack</color_y><color_w>.<br><br></color_w><color_y>Fire Attack: +{t5}%<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '26'],
			'{t6}': [null, '30']
		}
	},
	"10": {
		name: "Elbow Drop (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button near a knocked down enemy to elbow drop on them. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['3', '3'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '150']
		}
	},
	"211": {
		name: "Halfmoon Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Crescent Cleave Lv. 1<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Charges and unleashes a powerful attack in an arc in front of you. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '260', '289', '305', '355', '378', '486', '516', '548', '579', '612', '735', '753', '772', '792', '813']
		}
	},
	"418": {
		name: "Dash Uppercut (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dash Lv. 1<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "During <color_y>Dash</color_y><color_w>, press the attack button to uppercut the enemy with your weapon. <br></color_w><color_y>Damage: {t5}% + {1}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '71', '74', '78', '81', '88', '117', '127', '135', '144', '152', '179', '185', '190']
		}
	},
	"7520": {
		name: "Counterslash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "<color_w>Press the </color_w><color_y>Special Attack Button</color_y><color_w> when attacked to counterattack.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '185', '190', '199', '205', '211', '237', '243', '250', '257', '266']
		}
	},
	"201": {
		name: "Dash Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dash Lv. 1<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "During <color_y>Dash</color_y><color_w>, attack to swing your sword around. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '87', '89', '93', '95', '100', '118', '125', '130', '136', '141', '161', '164', '167']
		}
	},
	"557": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Physical Damage after using <color_y>Battle Howl, Taunting Howl,</color_y><color_w> or </color_w><color_y>Devastating Howl</color_y><color_w>.<br></color_w><color_y>Duration: {t5} sec<br>Damage +{t6}%</color_y>",
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
	"2": {
		name: "Impact Punch (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Deliver a powerful punch that lifts enemies into the air.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['1', '6', '11', '16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76', '81', '86'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '44', '46', '48', '50', '52', '64', '67', '74', '88', '96', '118', '126', '134', '138', '143', '164', '169', '173']
		}
	},
	"213": {
		name: "Infinity Edge (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frenzied Charge Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "Charge energy to perform a barrage of powerful attacks. You charge forward every time you press the attack button. You will take less damage during this skill. The final charge deals an extra 50% damage.<br><color_y>Physical Damage Taken: -50%<br>Magic Damage Taken: -50%<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '1564', '1856']
		}
	},
	"205": {
		name: "Frenzied Charge (PVP)",
		changeskill: "310",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Hacking Stance Lv. 1<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Gather your energy, then charge up to 10m forward, swinging at enemies as you go. Enemies that are hit are launched into the air. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '350', '393', '416', '494', '528', '689', '735', '783', '831', '881', '1065', '1092', '1121', '1150', '1180']
		}
	},
	"8": {
		name: "Side Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the special attack button to perform a side kick to the enemy in front of you, pushing them back. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['1'],
			'{t4}': ['0'],
			'{t5}': [null, '50']
		}
	},
	"407": {
		name: "Circle Swing (PVP)",
		changeskill: "423;513",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Demolition Fist Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Jump forward two steps to swing your weapon, dealing damage to nearby enemies. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '176', '185', '193', '215', '227', '315', '336', '366', '389', '413', '507', '536', '555', '569', '584', '674', '690']
		}
	},
	"7513": {
		name: "Fatal Impact (PVP)",
		changeskill: "7613",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Charge fire in the air and descend to the ground, creating a powerful shockwave. Press </color_w><color_y>Jump</color_y><color_w> in the air to activate the skill.<br>Press the </color_w><color_y>Regular Attack Button</color_y><color_w> while charging to descend immediately.<br><br></color_w><color_y>Create Fury x{t5} (Duration: {t6} sec)<br><br></color_y><color_y>Damage for Max Charge: {t7}%<br>Damage: {t8}%<br>Damage taken while casting: -70%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150'],
			'{t8}': [null, '312', '319', '326', '334', '341', '378', '387', '397', '407', '417', '460', '471', '484']
		}
	},
	"5": {
		name: "Rising Slash (PVP)",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 84%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 86%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 88%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 90%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 92%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 108%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 110%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 113%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 115%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 117%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 139%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 142%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 146%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 162%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 169%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 197%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 204%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 211%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 218%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 223%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 251%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 254%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 257%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 260%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 264%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 292%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 295%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 298%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>']		}
	},
	"7506": {
		name: "Avenger's Fury (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Release a blast of flame all around you<br>to generate </color_w><color_y>Fury</color_y><color_w> and weaken nearby enemies.<br><br></color_w><color_y>Create Fury x{t5} (Duration: {t6} sec)<br></color_y><color_y>Can be charged up to {t7}<br><br></color_y><color_y>Movement Speed/Action Speed: -{t8}%<br>(Duration: {t9} sec)<br></color_y><color_y>Damage: {t10}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t8}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '148', '149', '152', '153', '156', '167', '177', '182', '187', '191', '210', '216', '223', '231']
		}
	},
	"7611": {
		name: "(Nightmare) Vengeance Storm (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Able to cast the skill very quickly.<br><br></color_w><color_y>Skill Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"403": {
		name: "Crisis Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Press the special attack button when attacked to instantly release powerful energy that sends nearby enemies flying. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '9', '10', '11', '12', '13', '18', '20', '21', '23', '25', '29', '30', '31']
		}
	},
	"408": {
		name: "Stomp (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Stomps on the ground with great force to pull enemies and deal damage. Enemies will slow down for <color_y>{t5} seconds</color_y><color_w>. <br></color_w><color_y>Damage: {t6}%<br>Enemy Movement Speed: -{t7}%.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1.5', '2', '2.5', '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8'],
			'{t6}': [null, '97', '103', '113', '121', '138', '176', '220', '246', '268', '291', '351', '365', '379', '393'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30']
		}
	},
	"18": {
		name: "Dash (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Double-tap an arrow key and then hold the key to dash in that direction. Grants Super Armor. <br><color_y>Movement Speed: +{t5}<br>MP drained: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0'],
			'{t3}': ['10', '20', '30', '40', '50'],
			'{t4}': ['3', '1', '1', '1', '1'],
			'{t5}': [null, '100', '110', '120', '130', '140'],
			'{t6}': [null, '2', '1.8', '1.6', '1.4', '1.2']
		}
	},
	"207": {
		name: "Hacking Stance (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Forward Thrust Lv. 1<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Stand in a ready position. You'll swing your sword any time you press the attack button. You'll rapidly move forward when you press the forward key, dealing damage to enemies that are lying on the ground. This stance lasts for {t5} seconds.<br><color_y>Damage (per attack): {t6}%<br></color_y><color_y>When moving forward, deal {t7}% damage to enemies lying on the ground</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t6}': [null, '22', '23', '24', '26', '28', '38', '41', '45', '48', '51', '62', '65', '68', '69', '71', '82', '84'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7507": {
		name: "Phase Blade (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Mastery Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>전방으로 검기를 날려 히트 된 대상 앞으로 순간이동한다. 공중에서도 사용할 수 있다.<br><br></color_w><color_y>사거리 {t5}m<br>공중도 가능<br>공격력 {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '170', '174', '179', '184', '193', '213', '220', '226', '232', '240', '264', '272']
		}
	},
	"7527": {
		name: "Dark Avenger EX (A) (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Enhances the </color_w><color_y>Dark Avenger Transformation</color_y><color_w> skill.<br></color_w><color_w>While transformed into Dark Avenger, </color_w><color_y>Critical Chance</color_y><color_w> will increase dramatically.<br><br></color_w><color_y>Critical Chance: +{t5}%<br><br></color_y><color_s>(Exclusive Skill)<br>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['1'],
			'{t5}': [null, '15']
		}
	},
	"412": {
		name: "Taunting Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "Your provoking howl unleashes a burst of energy that deals damage and increases threat. The howl decreases the Critical Chance of enemies in range. <br><color_y>Physical Damage: 100%<br></color_y><color_y>Threat Gained: +{t5}<br>Enemy Critical Chance: -{t3}%<br>Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['24'],
			'{t4}': ['1'],
			'{t5}': [null, '30000'],
			'{t6}': [null, '-20'],
			'{t7}': [null, '10']
		}
	},
	"7501": {
		name: "Grave Slash (PVP)",
		changeskill: "7601",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Slash as you move forward, then deal two </color_w><color_y>additional hits.<br><br></color_y><color_y>(1st Additional Hit)<br>Regular Attack Button: </color_y><color_w>Slash as you move forward.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Slash as you spin in place.<br><br></color_w><color_y>(2nd Additional Hit)<br>Regular Attack: </color_y><color_w>Slash and shove enemies back.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Hit enemies and launch them into the air.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '208', '210', '213', '216', '220', '234', '239', '243', '247', '258', '276', '283', '289', '295', '300', '322', '329', '335', '343', '349', '377']
		}
	},
	"41": {
		name: "Death Knell (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_w>Transform into a </color_w><color_y>Dark Avenger</color_y><color_w>. Jump and shoot dozens of fire blades to the ground, then descend as you spin and attack.<br>Keep pressing the </color_w><color_y>Regular Attack Button</color_y><color_w> after the first hit to keep hitting. The damage of the final hit will increase depending on how long you charge the skill.<br><br></color_w><color_y>Can also be used in the air.<br>Total Projectiles: {t5}<br>Damage per Projectile: {t6}% (3 Hits)<br>Regular Final Hit Damage: {t7}%<br>Charged Final Hit Damage: {t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['225', '225', '225'],
			'{t3}': ['40', '50'],
			'{t4}': ['0', '0'],
			'{t5}': [null, '11', '11'],
			'{t6}': [null, '110', '132'],
			'{t7}': [null, '200', '200'],
			'{t8}': [null, '500', '500']
		}
	},
	"7613": {
		name: "(Nightmare) Fatal Impact (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Pull enemies toward you while charging in the air.<br><br></color_w><color_y>Damage: +15% when pulling enemies toward you<br>Skill's Damage: +{t5}%<br>Damage taken while casting: -70%<br>Damage for Max Charge: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"511": {
		name: "Bone Cleaver EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bone Cleaver Lv. 1<br>SP {t4}",
			'effect': "Enhances Bone Cleaver. <color_y>Left-click</color_y><color_w> to launch enemies into the air after smashing down. Additional Strike Damage: {t5}%<br>Fury: +{t6} points</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['80'],
			'{t4}': ['2'],
			'{t5}': [null, '50'],
			'{t6}': [null, '5']
		}
	},
	"415": {
		name: "Cleaving Gale (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Whirlwind Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "Whirl your weapon into a powerful tornado, inflicting multiple attacks on nearby enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '817', '960']
		}
	},
	"507": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Increases critical chance after using <color_y>Battle Howl, Taunting Howl,</color_y><color_w> or </color_w><color_y>Devastating Howl</color_y><color_w>.<br></color_w><color_y>Duration: {t5} sec<br>Critical Chance +{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10']
		}
	},
	"7601": {
		name: "(Nightmare) Grave Slash (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>[강화 상태]<br></color_v><color_y>[추가타]</color_y><color_y>가 강화되었다.<br><br></color_y><color_y>[일반공격버튼] : </color_y><color_w>엄청난 파장을 일으키며 돌진한다.<br></color_w><color_y>[특수공격버튼] : </color_y><color_w>전방 일직선으로 화염검을 소환하여 적을 띄운다.<br><br></color_w><color_y>스킬 공격력 {t5}% 증가</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7519": {
		name: "Aerial Blade (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Press the </color_w><color_y>Special Attack Button</color_y><color_w> in the air to strike downward with your weapon as you land.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '100', '100', '101', '103', '104', '112', '113', '114', '116', '117', '127']
		}
	},
	"6": {
		name: "Impact Wave (PVP)",
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
			'{t2}': ['8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 100%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 102%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 104%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 105%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 107%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 122%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 124%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 126%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 130%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 132%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 148%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 158%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 162%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 167%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 189%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 221%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 231%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 240%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 249%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 259%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 267%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 271%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 275%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 280%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 285%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 290%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 295%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 300%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 305%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>']		}
	},
	"309": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frenzied Charge EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Dash Combo</color_y><color_w> or </color_w><color_y>Dash Kick</color_y><color_w>, </color_w><color_y>Frenzied Charge EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Dash Kick</color_y><color_w> hits, restore </color_w><color_y>Frenzied Charge EX</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Frenzied Charge and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '27'],
			'{t6}': [null, '5']
		}
	},
	"553": {
		name: "Maelstrom Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Empowering Howl Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Pulls enemies in and unleashes a devastating howl. <br><color_y>Damage: {t5}%<br>Physical Damage Taken: -{t6}%<br>Magic Damage Taken: -{t7}%<br>Damage: +{t8}% of Vitality<br>Bonus Damage Duration: {t9} sec<br>Enemy Damage: -{t10}%<br>Damage Reduction Duration: {t11} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['10', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '520', '546', '572', '600', '618', '725', '740', '756', '773', '790', '846', '879', '912'],
			'{t6}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70'],
			'{t7}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70'],
			'{t8}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t11}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"512": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Circle Swing EX Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use <color_y>Whirlwind</color_y><color_w> or </color_w><color_y>Soccer Kick Combo</color_y><color_w>, </color_w><color_y>Circle Swing EX</color_y><color_w> temporarily becomes an instant skill. When </color_w><color_y>Soccer Kick Combo</color_y><color_w> hits, restore </color_w><color_y>Circle Swing</color_y><color_w> Instant's cooldown by {t5} sec.<br><br></color_w><color_y>Damage: +{t6}% <br>Circle Swing and Instant share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '12'],
			'{t6}': [null, '5']
		}
	},
	"560": {
		name: "Flying Swing EX Instant (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Flying Swing can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"304": {
		name: "Forward Thrust EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Forward Thrust Lv. 1<br>Triple Slash EX Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Thrust's range and damage. Press the special attack button to launch an additional attack and lift enemies into the air. Able to attack immediately while moving backwards.<br><color_y>Forward Thrust Damage: +{t5}%<br></color_y><color_y>Critical Resistance: -{t6}% <br>Duration: {t7} sec</color_y>",
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
	"310": {
		name: "Frenzied Charge EX Instant (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Frenzied Charge can be used quickly.",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"555": {
		name: "Bombs Away EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bombs Away Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Bombs Away to launch consecutive small explosions.<br><color_y>Small Explosion Damage: {t5}% of Bombs Away damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '20']
		}
	},
	"17": {
		name: "Brush Off (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Use your amazing powers of obliviousness to shrug off debuffs.<br><color_y>Debuffs Removed: {t5}</color_y><color_w><br></color_w><color_y>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45', '45', '45', '45', '45', '45', '45', '45'],
			'{t3}': ['30', '40', '50', '60', '70', '80', '90', '100'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '2', '2', '3', '3', '4', '5'],
			'{t6}': [null, '45', '45', '45', '45', '45', '45', '45', '45']
		}
	},
	"404": {
		name: "Iron Skin (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Enter a powerful <color_y>Super Armor</color_y><color_w> state for {t5} seconds, decreasing the damage you take and preventing you from being stunned. <br></color_w><color_y>Damage Taken: -{t6}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['45', '45'],
			'{t3}': ['30'],
			'{t4}': ['10'],
			'{t5}': [null, '9'],
			'{t6}': [null, '15%']
		}
	},
	"7505": {
		name: "Doom Blade (PVP)",
		changeskill: "7605",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Piercing Crescent Lv. 1<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Infuse your weapon's fire energy into the earth to disrupt the local gravity field and launch enemies into the air.<br><br></color_w><color_y>Create Fury x{t5} (Duration: {t6} sec)<br><br></color_y><color_y>Damage: {t7}%<br><br></color_y><color_y>Damage taken while casting: -{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '224', '228', '234', '239', '244', '274', '282', '288', '295', '300', '329', '336', '343', '350', '358', '390', '398'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7531": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Soul Cutter Lv. 1<br>Class Mastery Lv. 1<br>SP {t4}",
			'effect': "When you use<color_y>Phase Blade</color_y><color_w>, </color_w><color_y>Soul Cutter</color_y><color_w> temporarily becomes an instant skill.<br><br></color_w><color_y>Damage +{t5}%<br>Soul Cutter and Instant don't share cooldown</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"505": {
		name: "Circle Swing EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Circle Swing Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Circle Swing to launch enemies into the air with a regular attack. <br><color_y>Additional Attack: {t5}% of Circle Swing damage<br>Gain {t6} Fury when casting Taunting Howl </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '5']
		}
	},
	"29": {
		name: "Sweeping Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Side Kick Lv. 1<br>SP {t4}",
			'effect': "Press the special attack button after using <color_y>Side Kick</color_y><color_w> to perform a roundhouse kick combo.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t3}': ['8', '13', '18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78', '83', '88'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '38', '40', '43', '45', '48', '59', '62', '69', '74', '79', '94', '98', '102', '105', '108', '122', '126']
		}
	},
	"7516": {
		name: "Dash Combo (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "<color_w>Press the </color_w><color_y>Regular Attack Button</color_y><color_w> while tumbling or dashing to slash an enemy with a weapon and deal an </color_w><color_y>additional hit</color_y><color_w>.<br><br></color_w><color_y>Press the Regular Attack Button two more times: </color_y><color_w>Slash multiple times quickly and then deal an upward blow to launch an enemy into the air.<br><br></color_w><color_y>{t5}-hit Damage: {t6}% <br>Final Hit Damage: {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '114', '115', '116', '117', '120', '122', '126', '128', '130', '132', '156', '158', '161', '164'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"12": {
		name: "Surprise Attack (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Press the attack button while downed to send enemies flying back with a strong attack. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['16', '16'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '150']
		}
	},
	"413": {
		name: "Enervating Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Emits a powerful energy forward, attacking the enemy. Additionally, it removes buffs of nearby enemies and makes them unable to use their skills.<br><color_y>Damage: {t5}%<br>Attacked enemy<br>Buffs Removed: {t6} <br>Enemy skills disabled for {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['27', '27', '27', '27', '27'],
			'{t3}': ['34', '44', '54', '64'],
			'{t4}': ['3', '1', '1', '1'],
			'{t5}': [null, '188', '341', '462', '543'],
			'{t6}': [null, '1', '2', '3', '4'],
			'{t7}': [null, '2.1', '2.8', '3.5', '4.2']
		}
	},
	"409": {
		name: "Demolition Fist (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stomp Lv. 1<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "Gathers strength to inflict a powerful punch while dashing forward. <br>Damage: {t5}%",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '157', '160', '165', '168', '171', '204', '211', '241', '252', '268', '319', '334', '349', '364', '373', '426', '432', '438', '445']
		}
	},
	"7504": {
		name: "Dark Anguish (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Soul Cutter Lv. 1<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "<color_w>Draw your sword and take a stance.<br><br></color_w><color_y>Regular Attack Button: </color_y><color_w>Shoot a fast, explosive air blade.<br></color_w><color_y>Back Key + Regular Attack Button: </color_y><color_w>Shoot a slow air blade that will penetrate through an enemy and deal {t5}% Damage.<br></color_w><color_y>Forward Key: </color_y><color_w>Dash quickly.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Cancel the stance, detonate the slow air blade, and deal </color_w><color_y>{t6}x</color_y><color_w> Damage.<br><br></color_w><color_y>Stance Duration: {t7} sec<br></color_y><color_y>Damage per {t8} air blade(s): {t9}%<br>Final Hit's Damage: {t10}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t8}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t9}': [null, '113', '117', '119', '122', '124', '129', '133', '136', '139'],
			'{t10}': [null, '227', '234', '238', '244', '247', '259', '266', '272', '278']
		}
	},
	"355": {
		name: "Crescent Cleave EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Crescent Cleave Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Crescent Cleave, decreasing the cast time. Press regular attack to shoot additional slashes. If you fire a slash while moving backwards, it will deal damage to a small area.<br><color_y>Additional Slash: {t5}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '2']
		}
	},
	"410": {
		name: "Bombs Away (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Punishing Swing Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Slam your weapon into the ground to send out an explosive shockwave. Deals an extra 20% damage to any nearby enemies who suffer a direct hit.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '220', '230', '240', '260', '273', '357', '377', '403', '425', '447', '535', '561', '579', '594', '609', '695', '711']
		}
	},
	"7524": {
		name: "Power Accelerator (B) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Fire Attack</color_y><color_w> will increase by </color_w><color_y>{t5}%</color_y><color_w>.<br><br></color_w><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['1'],
			'{t5}': [null, '8']
		}
	},
	"7605": {
		name: "(Nightmare) Doom Blade (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Able to cast the skill very quickly.<br><br></color_w><color_y>Skill Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7529": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Generates </color_w><color_y>Fury</color_y><color_w> whenever you deal Critical Damage to an enemy with a </color_w><color_y>skill.<br><br></color_y><color_y>Creates {t5} when you deal Critical Damage with a skill.<br></color_y><color_r>Not applicable to (Warrior) skills.</color_r>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '1']
		}
	},
	"7608": {
		name: "(Nightmare) Rising Darkness (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>(Enhanced)<br></color_v><color_w>Able to cast the skill very quickly. You will also teleport and leap.<br><br></color_w><color_y>Skill Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5', '7.5'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"551": {
		name: "Empowering Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Calamity Crush Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Unleashes a burst of energy, encasing all allies within {t5}m in a damage-absorbing barrier.<br><color_y>Barrier Health: {t6}%<br>Barrier Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['65', '65'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '2623'],
			'{t7}': [null, '12']
		}
	},
	"11": {
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
	"33": {
		name: "Breaking Point (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "Places a buff on self and friendly targets that increases Physical Damage and Magic Damage.<br><color_y>Physical Damage: +{t5}%<br>Magic Damage: +{t6}%<br>Duration: {t7} Sec </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['34'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '10'],
			'{t7}': [null, '300']
		}
	},
	"359": {
		name: "Class Mastery II (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Class Mastery Lv. 1<br>Flash Stance Lv. 1<br>SP {t4}",
			'effect': "When using <color_y>Tumble</color_y><color_w>, </color_w><color_y>Flash Stance</color_y><color_w> temporarily becomes an instant skill, launches {t5} blades with each attack, and has a much shorter duration.<br><br></color_w><color_y>Damage: +{t6}%<br>Flash Stance and Instant don't share cooldown<br>Flash Stance Instant Cooldown: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['90'],
			'{t4}': ['1'],
			'{t5}': [null, '3'],
			'{t6}': [null, '5'],
			'{t7}': [null, '1.5']
		}
	},
	"7511": {
		name: "Vengeance Storm (PVP)",
		changeskill: "7611",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Doom Blade Lv. 1<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Charge fire energy and draw your sword to shoot dozens of fire blades.<br><br></color_w><color_y>Create Fury x{t5} (Duration: {t6} sec)<br><br></color_y><color_y>Damage: {t7}%<br><br></color_y><color_y>Damage taken while casting: -{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '488', '505', '518', '542', '557', '631', '648', '665', '682', '700', '776', '796', '816', '837', '859'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"506": {
		name: "Whirlwind EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Whirlwind Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Whirlwind's attack range and number of hits.<br><color_y>Whirlwind Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"20": {
		name: "Dash Kick (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dash Lv. 1<br>SP {t4}",
			'effect': "Press the special attack button during <color_y>Dash</color_y><color_w> to send enemies flying back with a powerful kick. <br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['12', '17', '22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77', '82', '87'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '87', '90', '93', '97', '100', '118', '135', '146', '155', '164', '197', '201', '205', '208', '212', '242']
		}
	},
	"401": {
		name: "Whirlwind (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Circle Swing Lv. 1<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Uses centrifugal force to spin and inflict multiple attacks on nearby enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '410', '449', '473', '539', '571', '723', '765', '807', '851', '895', '1065', '1092', '1119', '1148', '1177']
		}
	},
	"32": {
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
	"405": {
		name: "Flying Swing (PVP)",
		changeskill: "560",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Swings your weapon up to launch an enemy into the air. Damage taken decreases while you're charging this skill. <br><color_y>Damage: {t5}%<br>Damage Taken (while charging): -{t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '153', '156', '159', '162', '168', '193', '205', '212', '218', '246', '291', '309', '322', '335', '349', '407', '412', '417', '422', '427', '477'],
			'{t6}': [null, '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35']
		}
	},
	"301": {
		name: "Feint (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Infinity Edge Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Backstep, evading enemy attacks, then lash out at the enemy in front of you. This can be triggered with the <color_y>jump key</color_y><color_w> during any attack.<br></color_w><color_y>Damage: {t5}%<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '144', '171', '199', '231', '258', '284', '287', '289', '292', '294'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"7503": {
		name: "Piercing Crescent (PVP)",
		changeskill: "7603",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Stinger Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Jump in place and shoot multiple big air blades. Press the </color_w><color_y>Regular Attack Button</color_y><color_w> in the air to activate the skill.<br><br></color_w><color_y>Shoot {t5} air blade(s)<br></color_y><color_y>Damage per {t6} blade(s): {t7}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t7}': [null, '125', '126', '128', '130', '133', '137', '140', '142', '144', '145', '154', '157', '158', '160', '163', '172', '175', '177']
		}
	},
	"7515": {
		name: "Dark Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>Strength and Physical Damage will increase based on the number of </color_w><color_y>Fury</color_y><color_w> created.<br><br></color_w><color_y>Per Fury x{t5}:<br>STR +{t6}%<br>Damage: +{t7}</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['21'],
			'{t4}': ['3'],
			'{t5}': [null, '1'],
			'{t6}': [null, '1'],
			'{t7}': [null, '10']
		}
	},
	"552": {
		name: "Flying Swing EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flying Swing Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Flying Swing to cause multiple shockwaves in a row.<br><color_y>Damage per Shockwave: {t5}% of Flying Swing damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '20']
		}
	},
	"204": {
		name: "Forward Thrust (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Triple Slash Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Step back slightly, then dash forward with a bold stab. Attack again after the stab to get another swing in.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '98', '100', '105', '107', '109', '135', '141', '171', '182', '198', '242', '257', '271', '286', '294', '341', '346', '352', '358']
		}
	},
	"402": {
		name: "Battle Howl (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "Energizes self with a battle cry. Increases Damage, Critical Chance, and Stun Chance. <br><color_y>Duration: {t5} sec<br>Damage: +{t6} <br>Critical Chance: +{t7}<br>Stun Chance: +{t8}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['28'],
			'{t4}': ['10'],
			'{t5}': [null, '180'],
			'{t6}': [null, '618'],
			'{t7}': [null, '3100'],
			'{t8}': [null, '20']
		}
	},
	"7523": {
		name: "Power Accelerator (A) (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_y>Final Damage</color_y><color_w> will increase by </color_w><color_y>{t5}%</color_y><color_w>.<br><br></color_w><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['1'],
			'{t5}': [null, '5']
		}
	},
	"7508": {
		name: "Cataclysm (PVP)",
		changeskill: "7608",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Charge your weapon with energy, then deal a powerful upward blow to send a shockwave forward and launch enemies into the air. Press the </color_w><color_y>Jump button</color_y><color_w> while using a skill on the ground to activate it.<br><br></color_w><color_y>Can be used while using a skill<br></color_y><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '212', '218', '224', '232', '239', '266', '272', '279', '286', '295', '324']
		}
	},
	"31": {
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
	"214": {
		name: "Blade Storm (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Halfmoon Slash Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "Unleashes {t5} <color_y>explosive sword waves</color_y><color_w> to the front, launching enemies into the air. Press the </color_w><color_y>Regular Attack Button</color_y><color_w> to cancel the skill and unleash a </color_w><color_y>great sword wave</color_y><color_w>.<br></color_w><color_y>Explosive Sword Wave:<br>Damage: {t6}%<br>Explosion Damage: {t7}%, Last Explosion Damage: {t8}%<br>Great Sword Wave:<br>Damage per Hit: {t10}% of {t9}% Damage<br>Can deal up to 8 hits</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['90', '90', '90'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5', '5'],
			'{t6}': [null, '217', '256'],
			'{t7}': [null, '25', '25'],
			'{t8}': [null, '100', '100'],
			'{t9}': [null, '217', '256'],
			'{t10}': [null, '50', '50']
		}
	},
	"7509": {
		name: "Soul Cutter (PVP)",
		changeskill: "7532",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 35 or above<br>SP {t4}",
			'effect': "<color_w>Perform multiple twirl-thrusts in a row to draw nearby enemies toward you, then create a whirl of fire to launch enemies into the air. Decreases </color_w><color_y>all Resistances</color_y><color_w> of enemies hit by the whirl.<br><br></color_w><color_y>Regular Attack Button: </color_y><color_w>Slash as you spin.<br></color_w><color_y>Special Attack Button: </color_y><color_w>End the attack with a whirl of fire.<br><br></color_w><color_y>Able to attack up to {t5} time(s)<br></color_y><color_y>Resistance: -{t6}% (Duration: {t7} sec)<br></color_y><color_y>Damage: {t8}%<br>Whirl Damage: {t9}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['29', '34', '39', '44', '49', '54', '59', '64', '69', '74', '79'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '103', '104', '104', '106', '107', '111', '113', '113', '114', '116', '122'],
			'{t9}': [null, '206', '207', '208', '212', '213', '222', '225', '227', '228', '232', '244']
		}
	},
	"420": {
		name: "Toughness (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "Decreases physical damage taken by <color_y>{t5}%</color_y><color_w>.</color_w>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '15.0']
		}
	},
	"306": {
		name: "Frenzied Charge EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frenzied Charge Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Increases Frenzied Charge's damage. Also creates a blade of wind to slash enemies after you pass them.<br><color_y>Frenzied Charge Damage: +{t5}%<br>Damage per Blade of Wind: {t6}% of Frenzied Charge damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30'],
			'{t6}': [null, '5']
		}
	},
	"556": {
		name: "Roll Attack EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roll Attack Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Roll Attack's damage and downward attack range. <br><color_y>Roll Attack Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '30']
		}
	},
	"7": {
		name: "Destructive Swing (PVP)",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 68%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 69%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 70%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 72%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 73%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 83%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 87%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 89%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 91%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 99%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 115%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 138%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 146%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 157%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 166%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 199%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 210%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 221%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 227%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 231%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 235%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 240%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 244%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 249%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 254%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 259%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 264%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>']		}
	},
	"502": {
		name: "Stomp EX (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Stomp Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances the Stomp skill to cause a second shock wave.<br><color_y>Additional Hit Damage: {t5}% of Stomp damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['48'],
			'{t4}': ['3'],
			'{t5}': [null, '30']
		}
	},
	"210": {
		name: "Eclipse (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Slash nearby enemies by quickly spinning once and then pull them toward you. In PvP, this attack doesn't draw in enemies.<br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '53', '64', '73', '87', '107', '161', '177', '193', '208', '219', '264', '286']
		}
	},
	"501": {
		name: "Overpower (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleaving Gale Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Your attacks have a chance to deal extra damage equal to your max Damage.<br><color_y>Damage<br>Trigger Chance: {t5}%<br>Cooldown: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '60'],
			'{t6}': [null, '7']
		}
	},
	"7528": {
		name: "Dark Avenger EX (B) (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Enhances the </color_w><color_y>Dark Avenger Transformation </color_y><color_w>skill.<br></color_w><color_w>Decreases the cooldown of the Dark Avenger Transformation skill dramatically.<br><br></color_w><color_y>Decreases cooldown to {t5} sec.<br><br></color_y><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['30', '30'],
			'{t3}': ['70'],
			'{t4}': ['1'],
			'{t5}': [null, '30']
		}
	},
	"353": {
		name: "Flash Stance (PVP)",
		changeskill: "360",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Moon Blade Dance Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Stand in a ready position. Fire waves of energy from your sword with the <color_y>regular attack button</color_y><color_w>. Pressing the </color_w><color_y>special attack button</color_y><color_w> will release a massive wave and cancel the stance. You'll rapidly move forward when you press the forward key, dealing damage to enemies that are lying on the ground.<br></color_w><color_y>Damage per Hit: {t5}%<br>Duration: {t6} sec<br>Special Attack Damage: {t7}% of Normal Wave Damage<br></color_y><color_y>When moving forward, deal {t8}% damage to enemies lying on the ground.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '81', '86', '91', '97', '100', '121', '124', '127', '130', '133', '136', '139', '141'],
			'{t6}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t7}': [null, '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"220": {
		name: "Aerial Combo (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 20 or above<br>SP {t4}",
			'effect': "Attack while airborne to swing your sword at the enemy 3 times. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '87', '89', '90', '94', '95', '115', '119', '123', '142', '148', '185', '194', '204', '213', '224', '228', '232', '237', '242', '246']
		}
	},
	"351": {
		name: "Moon Blade Dance (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Blade Storm Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Jump into the air and fire 5 sword waves down at the enemy.<br><color_y>Damage: {t5}% per attack<br>Can be used midair.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19', '19'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '64', '69', '73', '77', '81', '103', '106', '109', '112', '115', '147', '151', '155', '160']
		}
	},
	"406": {
		name: "Punishing Swing (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Axe, Hammer",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flying Swing Lv. 1<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "Brandishes your weapon forward to launch and detonate a small bomb toward an enemy in front of you. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '121', '129', '134', '151', '161', '252', '279', '301', '323', '330', '406', '414', '422']
		}
	},
	"7502": {
		name: "Dark Stinger (PVP)",
		changeskill: "7602",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Grave Slash Lv. 1<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "<color_v>(Nightmare Skill)<br></color_v><color_w>Push a target with your shoulder as you dash instantly and deal an </color_w><color_y>additional hit</color_y><color_w>.<br><br></color_w><color_y>Regular Attack Button: </color_y><color_w>Stab while dashing.<br></color_w><color_y>Special Attack Button: </color_y><color_w>Hit enemies and launch them into the air.<br><br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '311', '315', '319', '323', '327', '361', '365', '370', '383', '391', '427', '434', '441', '448', '455', '494', '503', '511', '521', '531']
		}
	},
	"212": {
		name: "Luring Slice (PVP)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 40 or above<br>SP {t4}",
			'effect': "Destroys the defense of an enemy and pulls them toward you while cutting toward them and stabbing. <br><color_y>Damage: {t5}%<br></color_y><color_y>Enemy Physical Damage Taken: +{t6}%<br></color_y><color_y>Enemy Magic Damage Taken: +{t7}%.<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '114', '128', '138', '167', '185', '243', '263', '274', '285', '297', '309'],
			'{t6}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"307": {
		name: "Class Mastery (PVP)",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Creates a buff that increases your <color_y>Strength</color_y><color_w> with every successful Physical Attack.<br></color_w><color_y>Strength increases by {t5}% with each buff<br>Can stack up to {t6} time.<br>Duration: {t7} sec<br>(Internal Cooldown: {t8} sec)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '2'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5'],
			'{t8}': [null, '0.5']
		}
	}
});