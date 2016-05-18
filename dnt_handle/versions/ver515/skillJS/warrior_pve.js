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
		name: "Dark Avenger",
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
			'{t2}': ['40', '40', '40', '40', '40', '40', '40'],
			'{t3}': ['45', '55', '65', '75', '85', '95'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '680', '1040', '1800', '3320', '6200', '11480'],
			'{t7}': [null, '600', '600', '600', '600', '600', '600'],
			'{t8}': [null, '300', '300', '300', '300', '300', '300'],
			'{t9}': [null, '3', '3', '3', '3', '3', '3'],
			'{t10}': [null, '1', '1', '1', '1', '1', '1']
		}
	},
	"7526": {
		name: "Attack Accelerator (B)",
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
		name: "Cyclone Slash EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"218": {
		name: "Counter Cross",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '166', '174', '181', '189', '196', '230', '237', '244', '252']
		}
	},
	"203": {
		name: "Cyclone Slash",
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
			'{t5}': [null, '1124', '1149', '1178', '1207', '1237', '1467', '1492', '1521', '1550', '1580', '1810', '1840', '1864', '1893', '1923', '2153', '2183', '2207', '2236']
		}
	},
	"417": {
		name: "Devastating Howl",
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
			'{t2}': ['50', '50', '50', '50', '50', '50', '50'],
			'{t3}': ['36', '46', '56', '66', '76', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1'],
			'{t5}': [null, '450', '625', '800', '975', '1150', '1325'],
			'{t6}': [null, '116', '116', '116', '116', '116', '116'],
			'{t7}': [null, '25', '25', '25', '25', '25', '25']
		}
	},
	"303": {
		name: "Coup de Grace",
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
			'{t2}': ['21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21', '21'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t6}': [null, '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60', '60'],
			'{t7}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t8}': [null, '1229', '1259', '1289', '1319', '1349', '1508', '1539', '1569', '1599', '1628', '1788', '1818', '1847'],
			'{t9}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t10}': [null, '3', '3.5', '4', '4.5', '5', '5.5', '6', '6.5', '7', '7.5', '8', '8.5', '9']
		}
	},
	"24": {
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
	"219": {
		name: "Parry",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword, Gauntlet",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Take up a <color_y>Parrying</color_y><color_w> stance. Successful counterattacks deal high damage. Once you go into Parry, you cannot cancel it.<br></color_w><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5', '5'],
			'{t3}': ['22', '60'],
			'{t4}': ['10', '10'],
			'{t5}': [null, '1110', '2160']
		}
	},
	"558": {
		name: "Maelstrom Howl EX",
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
			'{t5}': [null, '130']
		}
	},
	"559": {
		name: "Class Mastery II",
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
		name: "Moon Blade Dance EX",
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
		name: "Death Knell",
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
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '11', '11'],
			'{t6}': [null, '808', '829'],
			'{t7}': [null, '200', '200'],
			'{t8}': [null, '500', '500']
		}
	},
	"9": {
		name: "Soccer Kick",
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
			'{t5}': [null, '135']
		}
	},
	"15": {
		name: "Dropkick",
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
			'{t5}': [null, '135']
		}
	},
	"308": {
		name: "Coup de Grace EX",
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
		name: "(Nightmare) Dark Stinger",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>SP {t4}",
			'effect': "<color_v>[강화 상태]<br></color_v><color_y>[추가타]</color_y><color_w>가 강화되었다. 피격된 대상은 일정 시간동안 모든 받는 피해량이 증가한다.<br><br></color_w><color_y>[일반공격버튼] : </color_y><color_w>빠르게 대쉬하며 찌른다.<br></color_w><color_y>[특수공격버튼] : </color_y><color_w>화염검을 소환하여 적을 띄운다.<br><br></color_w><color_y>스킬 공격력 {t5}% 증가<br>모든 받는 피해 {t6}% 증가<br>지속시간 {t7}초</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"206": {
		name: "Triple Slash",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1111', '1134', '1155', '1175', '1198', '1370', '1393', '1413', '1434', '1457', '1629', '1652', '1672', '1693', '1716', '1887', '1910', '1931', '1951', '1974', '1995']
		}
	},
	"356": {
		name: "Halfmoon Slash EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Halfmoon Slash Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Halfmoon Slash's attack range and grants an additional slash. Also increases the casting speed.<br><color_y>Halfmoon Slash Damage: +{t5}%<br>Addtional Hit Damage: {t6}% of Halfmoon Slash damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['0'],
			'{t5}': [null, '10'],
			'{t6}': [null, '40']
		}
	},
	"7603": {
		name: "(Nightmare) Piercing Crescent",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"305": {
		name: "Hacking Stance EX",
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
			'{t5}': [null, '30']
		}
	},
	"360": {
		name: "플래쉬 스탠스 인스턴트",
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
		name: "Courageous Shout",
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
			'{t5}': [null, '155', '163', '170', '178', '185', '218', '226', '233', '240', '247', '281'],
			'{t6}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t7}': [null, '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']
		}
	},
	"7532": {
		name: "Soul Cutter Instant",
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
		name: "Calamity Crush",
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
			'{t2}': ['120', '120', '120'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '4057', '4884']
		}
	},
	"414": {
		name: "Lifesaver",
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
			'{t6}': [null, '180']
		}
	},
	"302": {
		name: "Triple Slash EX",
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
		name: "Recovery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "<color_w>After taking damage, </color_w><color_y>Super Armor </color_y><color_w>increases.<br><br></color_w><color_y>Super Armor increase<br>Duration: {t5} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '6.5']
		}
	},
	"503": {
		name: "Bone Cleaver",
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
			'{t5}': [null, '867', '892', '916', '940', '963', '1090', '1114', '1138', '1161', '1185', '1312', '1336', '1359'],
			'{t6}': [null, '400', '800', '1200', '1600', '2000', '2400', '2800', '3200', '3600', '4000', '4400', '4800', '5200'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t8}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t9}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t10}': [null, '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5']
		}
	},
	"28": {
		name: "Heavy Slash",
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
			'{t5}': [null, '198', '204', '212', '219', '225', '258', '265', '271', '279', '285', '317', '325', '331', '337', '345', '377', '383', '391', '397', '404', '435', '443', '450', '458', '464', '496', '502', '510', '516']
		}
	},
	"411": {
		name: "Roll Attack",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '867', '903', '938', '974', '1008', '1175', '1210', '1246', '1280', '1316', '1482', '1518', '1553', '1588', '1623']
		}
	},
	"352": {
		name: "Moonlight Splitter EX",
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
			'{t5}': [null, '50']
		}
	},
	"504": {
		name: "Demolition Fist EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Demolition Fist Lv. 1<br>Stomp EX Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Demolition Fist to perform a powerful downward strike. <br><color_y>Additional Strike: {t5}% of Demolition Fist damage<br>Stun Chance: +{t6}%<br>All Damage: +{t7}%<br>Duration: {t8} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '70'],
			'{t7}': [null, '20'],
			'{t8}': [null, '10']
		}
	},
	"7522": {
		name: "Defense Accelerator (B)",
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
			'{t5}': [null, '20']
		}
	},
	"209": {
		name: "Crescent Cleave",
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
			'{t6}': [null, '309', '324', '338', '353', '367', '436', '451', '465', '481', '495', '565', '579', '594', '608', '624', '692', '706']
		}
	},
	"554": {
		name: "Punishing Swing EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Punishing Swing Lv. 1<br>Flying Swing EX Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Punishing Swing to deploy a wide-ranged bomb to burn enemies. Taunts the attacked enemy for {t5} sec.<br><color_y>Fire Magic<br>Punishing Swing Damage: +{t6}%<br>Burn Damage: {t7}% of Magic Damage per tick for 5 ticks</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['55'],
			'{t4}': ['0'],
			'{t5}': [null, '12'],
			'{t6}': [null, '60'],
			'{t7}': [null, '20']
		}
	},
	"7521": {
		name: "Defense Accelerator (A)",
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
			'{t5}': [null, '10']
		}
	},
	"30": {
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
	"419": {
		name: "Soccer Kick Combo",
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
			'{t2}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t3}': ['22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '167', '174', '180', '186', '192', '223', '229', '235', '241', '248', '278', '284']
		}
	},
	"208": {
		name: "Moonlight Splitter",
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
			'{t5}': [null, '83', '85', '85', '87', '88', '100', '105', '115', '119', '124', '183', '187', '197', '202', '207', '260', '270', '275', '285', '289', '294']
		}
	},
	"357": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "After dealing magic damage, your <color_y>Damage</color_y><color_w> is temporarily boosted based on your Intellect.<br></color_w><color_y>Damage: +{t6} per {t5} INT<br>Duration: {t7} sec<br>Cannot be stacked.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '1'],
			'{t6}': [null, '1.4'],
			'{t7}': [null, '5']
		}
	},
	"7530": {
		name: "Dark Tumble",
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
		name: "Attack Accelerator (A)",
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
			'{t5}': [null, '10']
		}
	},
	"215": {
		name: "Dash Combo",
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
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '160', '165', '169', '174', '178', '196', '201', '206', '210', '215', '233', '237', '242']
		}
	},
	"7510": {
		name: "Shadow Pact",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Buff",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Explode condensed fire energy to increase your </color_w><color_y>Fire Attack</color_y><color_w>.<br><br></color_w><color_y>Fire Attack: +{t5}%<br></color_y><color_y>Duration: {t6} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['40', '40'],
			'{t3}': ['26'],
			'{t4}': ['10'],
			'{t5}': [null, '40'],
			'{t6}': [null, '30']
		}
	},
	"10": {
		name: "Elbow Drop",
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
			'{t5}': [null, '135']
		}
	},
	"211": {
		name: "Halfmoon Slash",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1159', '1206', '1253', '1299', '1346', '1567', '1613', '1660', '1707', '1754', '1973', '2020', '2067', '2114', '2161']
		}
	},
	"418": {
		name: "Dash Uppercut",
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
			'{t5}': [null, '108', '111', '115', '118', '120', '137', '141', '143', '146', '150', '167', '169', '172']
		}
	},
	"7520": {
		name: "Counterslash",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '262', '271', '280', '289', '298', '339', '348', '356', '365', '374']
		}
	},
	"201": {
		name: "Dash Slash",
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
			'{t2}': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5'],
			'{t3}': ['16', '21', '26', '31', '36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '163', '167', '170', '174', '178', '208', '212', '216', '221', '224', '242', '246', '250']
		}
	},
	"557": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "All attacks deal additional damage after using <color_y>Battle Howl, Taunting Howl,</color_y><color_w> or </color_w><color_y>Devastating Howl</color_y><color_w>. Restores health after using </color_w><color_y>Empowering Howl</color_y><color_w>.<br></color_w><color_y>Duration: {t5} sec<br>Damage per Hit +{t6}%<br>Restores {t8}% health every {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '2'],
			'{t8}': [null, '3']
		}
	},
	"2": {
		name: "Impact Punch",
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
			'{t5}': [null, '137', '147', '155', '165', '175', '228', '239', '249', '259', '267', '322', '330', '340', '351', '361', '414', '424', '434']
		}
	},
	"213": {
		name: "Infinity Edge",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Frenzied Charge Lv. 1<br>Warrior SP Total 45 or above<br>SP {t4}",
			'effect': "Charge energy to perform a barrage of powerful attacks. You charge forward every time you press the attack button. You will take less damage during this skill. The final charge deals an extra {t5}% damage.<br><color_y>Invincible during skill<br></color_y><color_y>Damage: {t6}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['125', '125', '125'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '100', '100'],
			'{t6}': [null, '5931', '7140']
		}
	},
	"205": {
		name: "Frenzied Charge",
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
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1198', '1246', '1295', '1343', '1392', '1621', '1669', '1718', '1766', '1815', '2042', '2091', '2139', '2188', '2237']
		}
	},
	"8": {
		name: "Side Kick",
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
		name: "Circle Swing",
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
			'{t5}': [null, '764', '801', '838', '875', '911', '1087', '1123', '1160', '1197', '1234', '1409', '1446', '1483', '1519', '1556', '1729', '1768']
		}
	},
	"7513": {
		name: "Fatal Impact",
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
			'{t2}': ['30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150', '150'],
			'{t8}': [null, '1064', '1088', '1113', '1137', '1161', '1291', '1316', '1340', '1364', '1388', '1518', '1542', '1567']
		}
	},
	"5": {
		name: "Rising Slash",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 197%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 201%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 205%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 209%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked down. <br><color_y>Damage: 213%<br>(The effect is enhanced at skill lv. 6.)</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 246%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 250%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 254%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 258%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 262%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 295%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 299%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 302%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 307%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 311%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 344%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 348%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 352%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 355%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 359%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 393%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 397%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 401%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 405%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 408%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 441%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 446%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>', 'After a strong shoulder charge attack, press the attack button one more time to launch the enemy in the air. Can attack an enemy that is knocked-down. <br><color_y>Damage: 450%<br><br>Enhancement Effect:<br>Can deal 2 additional hits.<br>Additional Damage: 25%</color_y>']		}
	},
	"7506": {
		name: "Avenger's Fury",
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
			'{t2}': ['50', '50', '48', '46', '44', '42', '40', '38', '36', '34', '32', '30', '28', '26', '24'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t8}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t9}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t10}': [null, '464', '471', '479', '486', '493', '545', '552', '559', '566', '573', '625', '632', '639', '647']
		}
	},
	"7611": {
		name: "(Nightmare) Vengeance Storm",
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
			'{t2}': ['16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16', '16'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"403": {
		name: "Crisis Howl",
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
			'{t2}': ['29', '29', '28', '27', '26', '25', '24', '23', '22', '21', '20', '19', '18', '17'],
			'{t3}': ['18', '23', '28', '33', '38', '43', '48', '53', '58', '63', '68', '73', '78'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '113', '118', '122', '126', '130', '148', '152', '156', '160', '164', '183', '187', '191']
		}
	},
	"408": {
		name: "Stomp",
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
			'{t5}': [null, '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'],
			'{t6}': [null, '249', '268', '288', '307', '327', '417', '436', '456', '475', '495', '585', '605', '624', '644'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"18": {
		name: "Dash",
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
			'{t6}': [null, '0.5', '0.4', '0.3', '0.2', '0.1']
		}
	},
	"207": {
		name: "Hacking Stance",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '30', '30', '30', '30', '30', '25', '25', '25', '25', '25', '20', '20'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t6}': [null, '205', '214', '221', '230', '236', '275', '284', '291', '300', '309', '345', '354', '360', '370', '379', '415', '424'],
			'{t7}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7507": {
		name: "Phase Blade",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Instant",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Mastery Lv. 1<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "<color_w>Shoot an air blade forward and teleport in front of the attacked enemy.<br><br></color_w><color_y>Range: {t5}m<br>Can be used in the air as well.<br>Damage: {t6}%<br>Unable to teleport in front of some nest bosses.</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['25', '25', '24', '23', '22', '21', '20', '19', '18', '17', '16', '15', '14'],
			'{t3}': ['25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t6}': [null, '439', '453', '467', '482', '496', '561', '575', '589', '603', '617', '682', '697']
		}
	},
	"7527": {
		name: "Dark Avenger EX (A)",
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
		name: "Taunting Howl",
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
			'{t2}': ['25', '25'],
			'{t3}': ['24'],
			'{t4}': ['10'],
			'{t5}': [null, '30000'],
			'{t6}': [null, '-20'],
			'{t7}': [null, '10']
		}
	},
	"7501": {
		name: "Grave Slash",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '797', '813', '830', '847', '864', '941', '958', '975', '992', '1009', '1086', '1103', '1120', '1137', '1154', '1231', '1248', '1265', '1282', '1298', '1376']
		}
	},
	"41": {
		name: "Death Knell",
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
			'{t2}': ['20', '20', '20'],
			'{t3}': ['40', '50'],
			'{t4}': ['0', '0'],
			'{t5}': [null, '11', '11'],
			'{t6}': [null, '808', '829'],
			'{t7}': [null, '200', '200'],
			'{t8}': [null, '500', '500']
		}
	},
	"7613": {
		name: "(Nightmare) Fatal Impact",
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
			'{t2}': ['15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50'],
			'{t6}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200']
		}
	},
	"511": {
		name: "Bone Cleaver EX",
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
		name: "Cleaving Gale",
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
			'{t2}': ['150', '150', '150'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5749', '6929']
		}
	},
	"507": {
		name: "Class Mastery",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Increases critical chance after using <color_y>Battle Howl, Taunting Howl,</color_y><color_w> and </color_w><color_y>Devastating Howl</color_y><color_w>. Increases damage in exchange for health after using </color_w><color_y>Taunting Howl</color_y><color_w>.<br></color_w><color_y>Duration: {t5} sec<br>Critical Chance +{t6}%<br>Damage +{t8}% for {t7}% health</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['65'],
			'{t4}': ['1'],
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '2'],
			'{t8}': [null, '50']
		}
	},
	"7601": {
		name: "(Nightmare) Grave Slash",
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
			'{t2}': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
			'{t3}': ['15', '18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7519": {
		name: "Aerial Blade",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '99', '101', '102', '104', '106', '119', '120', '122', '123', '125', '139']
		}
	},
	"6": {
		name: "Impact Wave",
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
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76', '79', '82', '85'],
			'{t4}': ['0', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 188%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 191%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 193%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 196%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 198%<br>Range: 4m<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 218%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 221%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 223%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 226%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 228%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 288%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 291%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 294%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 297%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 300%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 324%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 327%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 330%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 333%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 336%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 339%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 342%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 345%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 347%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 351%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 354%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 356%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 360%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>', 'Strike the ground with your weapon, unleashing a shock wave. Can attack an enemy that is knocked down.<br><color_y>Damage: 362%<br>Range: 4m<br><br>Enhancement Effect:<br>Increases the range of shock wave<br>Additional Damage: 25%</color_y>']		}
	},
	"309": {
		name: "Class Mastery II",
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
		name: "Maelstrom Howl",
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
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['10', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '873', '897', '920', '944', '968', '1095', '1119', '1142', '1166', '1190', '1317', '1341', '1364'],
			'{t6}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70'],
			'{t7}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70'],
			'{t8}': [null, '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200', '200'],
			'{t9}': [null, '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30', '30'],
			'{t10}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t11}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20']
		}
	},
	"512": {
		name: "Class Mastery II",
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
		name: "Flying Swing EX Instant",
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
		name: "Forward Thrust EX",
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
			'{t6}': [null, '20'],
			'{t7}': [null, '10']
		}
	},
	"310": {
		name: "Frenzied Charge EX Instant",
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
			'{t2}': ['27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27', '27'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
		}
	},
	"555": {
		name: "Bombs Away EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Bombs Away Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Bombs Away to launch consecutive small explosions.<br><color_y>Bombs Away Damage: +{t5}%<br>Small Explosion Damage: {t6}% of Bombs Away damage</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '20']
		}
	},
	"17": {
		name: "Brush Off",
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
			'{t2}': ['45', '45', '35', '35', '25', '25', '15', '15', '15'],
			'{t3}': ['30', '40', '50', '60', '70', '80', '90', '100'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '2', '2', '3', '3', '4', '5'],
			'{t6}': [null, '45', '35', '35', '25', '25', '15', '15', '15']
		}
	},
	"404": {
		name: "Iron Skin",
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
			'{t5}': [null, '30'],
			'{t6}': [null, '60%']
		}
	},
	"7505": {
		name: "Doom Blade",
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
			'{t2}': ['24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24', '24'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '368', '376', '385', '393', '401', '446', '454', '463', '471', '479', '524', '532', '540', '549', '557', '602', '610'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7531": {
		name: "Class Mastery II",
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
		name: "Circle Swing EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Circle Swing Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Circle Swing to launch enemies into the air with a regular attack.<br><color_y>Additional Attack: {t5}% of Circle Swing damage<br></color_y><color_w>Hit regular attack after using Circle Swing to launch enemies.<br></color_w><color_y>Enhanced Additional Attack:({t6}% of Circle Swing EX Damage<br>Add {t7} Fury when casting Taunting Howl </color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '30'],
			'{t6}': [null, '1000'],
			'{t7}': [null, '5']
		}
	},
	"29": {
		name: "Sweeping Kick",
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
			'{t5}': [null, '104', '113', '124', '134', '145', '188', '197', '208', '218', '229', '272', '281', '293', '302', '313', '356', '365']
		}
	},
	"7516": {
		name: "Dash Combo",
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
			'{t2}': ['10', '10', '9.5', '9', '8.5', '8', '7.5', '7', '6.5', '6', '5.5', '5', '4.5', '4', '3.5'],
			'{t3}': ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '148', '151', '155', '158', '162', '165', '169', '173', '176', '180', '253', '257', '260', '264'],
			'{t7}': [null, '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100']
		}
	},
	"12": {
		name: "Surprise Attack",
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
			'{t2}': ['12', '12'],
			'{t3}': ['6'],
			'{t4}': ['1'],
			'{t5}': [null, '135']
		}
	},
	"413": {
		name: "Enervating Howl",
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
			'{t5}': [null, '155', '166', '177', '188'],
			'{t6}': [null, '1', '2', '3', '4'],
			'{t7}': [null, '3', '4', '5', '6']
		}
	},
	"409": {
		name: "Demolition Fist",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '640', '650', '662', '672', '683', '772', '784', '794', '806', '816', '904', '916', '928', '938', '950', '1038', '1048', '1060', '1070']
		}
	},
	"7504": {
		name: "Dark Anguish",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['36', '41', '46', '51', '56', '61', '66', '71', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t6}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t7}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t8}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t9}': [null, '370', '376', '382', '388', '395', '435', '442', '448', '454'],
			'{t10}': [null, '739', '752', '764', '777', '789', '871', '883', '896', '908']
		}
	},
	"355": {
		name: "Crescent Cleave EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Crescent Cleave Lv. 1<br>Swordsman SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Crescent Cleave, decreasing the cast time. Press regular attack to shoot additional slashes. If you fire a slash while moving backwards, it will deal damage to a small area.<br><color_y>Additional Slash: {t5}<br>Slash Damage: +{t6}%<br>Increases max hit count by {t7} time(s)</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['60'],
			'{t4}': ['0'],
			'{t5}': [null, '2'],
			'{t6}': [null, '20'],
			'{t7}': [null, '2']
		}
	},
	"410": {
		name: "Bombs Away",
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
			'{t2}': ['22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22'],
			'{t3}': ['26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '631', '661', '692', '722', '754', '896', '926', '956', '986', '1017', '1160', '1191', '1221', '1251', '1281', '1423', '1453']
		}
	},
	"7524": {
		name: "Power Accelerator (B)",
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
			'{t5}': [null, '15']
		}
	},
	"7605": {
		name: "(Nightmare) Doom Blade",
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
			'{t2}': ['12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12', '12'],
			'{t3}': ['28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"7529": {
		name: "Class Mastery",
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
		name: "(Nightmare) Rising Darkness",
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
			'{t2}': ['10', '10', '9.5', '9', '8.5', '8', '7.5', '7', '6.5', '6', '5.5', '5'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
			'{t5}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"551": {
		name: "Empowering Howl",
		d1: {
			'lvl': '{n}',
			'cast': "Buff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Calamity Crush Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Explodes a powerful energy, encasing all allies within {t5} m in a damage-absorbing barrier.<br><color_y>Barrier Health: {t6}%<br>Barrier Duration: {t7} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['60', '60'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '10'],
			'{t6}': [null, '20'],
			'{t7}': [null, '20']
		}
	},
	"11": {
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
	"33": {
		name: "Breaking Point",
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
		name: "Class Mastery II",
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
		name: "Vengeance Storm",
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
			'{t2}': ['32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32', '32'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'],
			'{t6}': [null, '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180', '180'],
			'{t7}': [null, '888', '910', '933', '955', '977', '1095', '1117', '1140', '1162', '1184', '1302', '1324', '1347', '1369', '1391'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"506": {
		name: "Whirlwind EX",
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
		name: "Dash Kick",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['12', '17', '22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77', '82', '87'],
			'{t4}': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '309', '315', '322', '328', '334', '376', '382', '388', '395', '401', '443', '449', '455', '462', '468', '509']
		}
	},
	"401": {
		name: "Whirlwind",
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
			'{t2}': ['25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25', '25'],
			'{t3}': ['32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '955', '995', '1033', '1072', '1110', '1292', '1331', '1369', '1408', '1448', '1629', '1668', '1707', '1745', '1784']
		}
	},
	"32": {
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
	"405": {
		name: "Flying Swing",
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
			'{t5}': [null, '694', '710', '727', '743', '760', '894', '910', '927', '943', '959', '1091', '1107', '1124', '1140', '1156', '1291', '1307', '1323', '1340', '1356', '1490'],
			'{t6}': [null, '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70', '70']
		}
	},
	"301": {
		name: "Feint",
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
			'{t2}': ['10', '10', '9.5', '9', '8.5', '8', '7.5', '7', '6.5', '6', '5.5'],
			'{t3}': ['45', '50', '55', '60', '65', '70', '75', '80', '85', '90'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '617', '745', '873', '998', '1126', '1255', '1273', '1288', '1307', '1326'],
			'{t6}': [null, '10', '9.5', '9', '8.5', '8', '7.5', '7', '6.5', '6', '5.5']
		}
	},
	"7503": {
		name: "Piercing Crescent",
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
			'{t2}': ['20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t3}': ['24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3', '3'],
			'{t6}': [null, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t7}': [null, '362', '367', '371', '376', '381', '419', '423', '428', '433', '437', '475', '480', '484', '489', '494', '532', '536', '541']
		}
	},
	"7515": {
		name: "Dark Mastery",
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
			'{t6}': [null, '3'],
			'{t7}': [null, '50']
		}
	},
	"552": {
		name: "Flying Swing EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Flying Swing Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Flying Swing to cause multiple shockwaves in a row.<br><color_y>Flying Swing Damage: +{t5}%<br>Damage per Shockwave: {t6}% of Flying Swing damage</color_y>",
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
	"204": {
		name: "Forward Thrust",
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
			'{t2}': ['13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13', '13'],
			'{t3}': ['20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '902', '918', '933', '949', '964', '1090', '1104', '1121', '1135', '1152', '1276', '1293', '1307', '1324', '1338', '1465', '1479', '1496', '1510']
		}
	},
	"402": {
		name: "Battle Howl",
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
			'{t2}': ['10', '10'],
			'{t3}': ['28'],
			'{t4}': ['10'],
			'{t5}': [null, '180'],
			'{t6}': [null, '8502'],
			'{t7}': [null, '15340'],
			'{t8}': [null, '20']
		}
	},
	"7523": {
		name: "Power Accelerator (A)",
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
			'{t5}': [null, '10']
		}
	},
	"7508": {
		name: "Cataclysm",
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
			'{t2}': ['20', '20', '19', '18', '17', '16', '15', '14', '13', '12', '11', '10'],
			'{t3}': ['30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '601', '620', '640', '659', '679', '767', '787', '806', '826', '845', '934']
		}
	},
	"31": {
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
	"214": {
		name: "Blade Storm",
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
			'{t2}': ['120', '120', '120'],
			'{t3}': ['40', '60'],
			'{t4}': ['3', '1'],
			'{t5}': [null, '5', '5'],
			'{t6}': [null, '3265', '3361'],
			'{t7}': [null, '25', '25'],
			'{t8}': [null, '100', '100'],
			'{t9}': [null, '3265', '3361'],
			'{t10}': [null, '50', '50']
		}
	},
	"7509": {
		name: "Soul Cutter",
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
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
			'{t8}': [null, '190', '193', '197', '200', '204', '225', '229', '232', '235', '239', '260'],
			'{t9}': [null, '381', '386', '393', '400', '407', '451', '458', '463', '470', '477', '521']
		}
	},
	"420": {
		name: "Toughness",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 25 or above<br>SP {t4}",
			'effect': "Decreases physical damage taken by <color_y>{t5}%</color_y><color_w>. If you take damage when your HP is at or below </color_w><color_y>{t6}%</color_y><color_w>, you will deal more damage. <br></color_w><color_y>Below {t7}% HP: Damage +{t8}%<br>Damage Buff Duration: {t9} sec<br>Damage Buff Cooldown: {t10} sec</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['22'],
			'{t4}': ['10'],
			'{t5}': [null, '15.0'],
			'{t6}': [null, '60'],
			'{t7}': [null, '60'],
			'{t8}': [null, '20'],
			'{t9}': [null, '60'],
			'{t10}': [null, '60']
		}
	},
	"306": {
		name: "Frenzied Charge EX",
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
		name: "Roll Attack EX",
		d1: {
			'lvl': '{n}',
			'cast': "Passive Enhance",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Roll Attack Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Enhances Roll Attack's damage, downward attack range, and attack range while spinning airborne. <br><color_y>Roll Attack Damage: +{t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['0', '0'],
			'{t3}': ['70'],
			'{t4}': ['2'],
			'{t5}': [null, '60']
		}
	},
	"7": {
		name: "Destructive Swing",
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
			'{t2}': ['11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11'],
			'{t3}': ['8', '11', '14', '17', '20', '23', '26', '29', '32', '35', '38', '41', '44', '47', '50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 230%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 234%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 237%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 240%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 244%<br><br>(The effect is enhanced at skill lv. 6.)</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 273%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 276%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 280%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 284%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 287%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 374%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 378%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 382%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 387%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 391%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 426%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 430%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 434%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 438%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 443%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 446%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 451%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 455%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 459%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 464%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 468%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>', 'Strikes the ground hard after jumping to send enemies flying with a shock wave. Can destroy High Shields. Effective on knocked down enemies.<br><color_y>Damage: 472%<br><br>\\Enhancement Effect:<br>Can switch direction while jumping.<br>Invincibility: 0.3 sec<br>Additional Damage: 25%</color_y>']		}
	},
	"502": {
		name: "Stomp EX",
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
		name: "Eclipse",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Debuff",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Warrior SP Total 30 or above<br>SP {t4}",
			'effect': "Slash nearby enemies by quickly spinning once and then pull them toward you. <br><color_y>Damage: {t5}%</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['20', '20', '20', '20', '20', '18', '18', '18', '18', '16', '16', '16', '16'],
			'{t3}': ['22', '27', '32', '37', '42', '47', '52', '57', '62', '67', '72', '77'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '136', '148', '159', '170', '235', '245', '257', '264', '269', '280', '332', '344']
		}
	},
	"501": {
		name: "Overpower",
		d1: {
			'lvl': '{n}',
			'cast': "Passive",
			'element': "None",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Cleaving Gale Lv. 1<br>Mercenary SP Total 65 or above<br>SP {t4}",
			'effect': "Begin accumulating Fury and deal damage equal to your Max Physical Damage.<br>When attacking, your Strength increases for <color_y>{t5}</color_y><color_w> sec based on your HP, and you obtain Fury faster.<br></color_w><color_y>At {t6}% HP, obtain Fury every {t7} sec<br>At {t8}% HP, obtain STR +{t9}% and Fury every {t10} sec<br>At {t11}% HP, obtain STR +{t12}% and Fury every {t13} sec <br>At {t14}% HP, obtain STR +{t15}% and Fury every {t16} sec,  Duration: {t17} sec, Chance to strike with Max Physical Damage: {t18}%, Cooldown: {t19} sec<br></color_y><color_w>Activates enhanced Circle Swing by consuming </color_w><color_y>{t20}</color_y><color_w> Fury when Taunting Howl is cast. The effect disappears when enhanced Circle Swing is used.<br>Enhanced Circle Swing<br></color_w><color_y>{t21}% of Circle Swing damage<br>Damage received is decreased by {t22}% while the skill is active</color_y>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['2', '2'],
			'{t3}': ['45'],
			'{t4}': ['10'],
			'{t5}': [null, '20'],
			'{t6}': [null, '100'],
			'{t7}': [null, '3'],
			'{t8}': [null, '80'],
			'{t9}': [null, '40'],
			'{t10}': [null, '2'],
			'{t11}': [null, '60'],
			'{t12}': [null, '60'],
			'{t13}': [null, '1'],
			'{t14}': [null, '30'],
			'{t15}': [null, '90'],
			'{t16}': [null, '0.5'],
			'{t17}': [null, '20'],
			'{t18}': [null, '60'],
			'{t19}': [null, '2'],
			'{t20}': [null, '50'],
			'{t21}': [null, '500'],
			'{t22}': [null, '30']
		}
	},
	"7528": {
		name: "Dark Avenger EX (B)",
		d1: {
			'lvl': '{n}',
			'weapon': "Greatsword",
			'cast': "Passive Enhance",
			'element': "Fire",
			'CD': '{t2} sec',
		},
		d2: {
			'lvlup': "Character Level {t3}<br>Dark Avenger Lv. 1<br>Avenger SP Total 65 or above<br>SP {t4}",
			'effect': "<color_w>Enhances the </color_w><color_y>Dark Avenger Transformation</color_y><color_w> skill.<br></color_w><color_w>Decreases the cooldown of the Dark Avenger Transformation skill, and increases your </color_w><color_y>Critical Chance</color_y><color_w> slightly.<br><br></color_w><color_y>Decreases cooldown to {t5} sec.<br><br></color_y><color_y>Critical Chance: +{t6}%<br><br></color_y><color_s>(Exclusive Skill)<br></color_s><color_s>You can only learn either type A or type B of this skill.</color_s>",
			'nexteffect': '{next|effect}'
		},
		t: {
			'{t2}': ['5', '5'],
			'{t3}': ['70'],
			'{t4}': ['1'],
			'{t5}': [null, '5'],
			'{t6}': [null, '5']
		}
	},
	"353": {
		name: "Flash Stance",
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
			'{t2}': ['35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35', '35'],
			'{t3}': ['50', '53', '56', '59', '62', '65', '68', '71', '74', '77', '80', '83', '86'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '115', '120', '123', '127', '132', '149', '154', '157', '161', '166', '183', '187', '191'],
			'{t6}': [null, '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7', '7'],
			'{t7}': [null, '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300', '300'],
			'{t8}': [null, '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50', '50']
		}
	},
	"220": {
		name: "Aerial Combo",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['18', '21', '24', '27', '30', '33', '36', '39', '42', '45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '276', '281', '285', '290', '295', '332', '337', '342', '346', '350', '387', '392', '397', '401', '406', '411', '415', '420', '424', '429']
		}
	},
	"351": {
		name: "Moon Blade Dance",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['45', '48', '51', '54', '57', '60', '63', '66', '69', '72', '75', '78', '81', '84'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '364', '381', '397', '414', '430', '508', '524', '541', '556', '572', '650', '667', '683', '700']
		}
	},
	"406": {
		name: "Punishing Swing",
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
			'{t2}': ['10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10'],
			'{t3}': ['20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '500', '522', '547', '568', '593', '824', '849', '871', '892', '917', '1148', '1173', '1195']
		}
	},
	"7502": {
		name: "Dark Stinger",
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
			'{t2}': ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14'],
			'{t3}': ['19', '22', '25', '28', '31', '34', '37', '40', '43', '46', '49', '52', '55', '58', '61', '64', '67', '70', '73', '76'],
			'{t4}': ['3', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1'],
			'{t5}': [null, '816', '827', '838', '850', '861', '953', '965', '976', '987', '999', '1091', '1102', '1113', '1125', '1136', '1228', '1240', '1251', '1262', '1274']
		}
	},
	"212": {
		name: "Luring Slice",
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
			'{t5}': [null, '148', '153', '159', '166', '172', '199', '205', '211', '217', '223', '229'],
			'{t6}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t7}': [null, '20', '20', '20', '20', '20', '20', '20', '20', '20', '20', '20'],
			'{t8}': [null, '10', '10', '10', '10', '10', '10', '10', '10', '10', '10', '10']
		}
	},
	"307": {
		name: "Class Mastery",
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
			'{t5}': [null, '6'],
			'{t6}': [null, '10'],
			'{t7}': [null, '5'],
			'{t8}': [null, '0.5']
		}
	}
});