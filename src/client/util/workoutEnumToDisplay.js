const enumToDisplayMap = {
  LEGS: "Legs",
  ARMS_ABS: "Arms and Abs",
  CHEST_ABS: "Chest and Abs",
  BACK_CALVES: "Back and Calves",
  CARDIO_ELLIPTICAL: "Elliptical",
  SHOULDER_ABS: "Shoulder and Abs",
  INSANITY_PLYOMETRIC_CARDIO_CIRCUIT: "Plyometric Cardio Circuit (Insanity)",
  INSANITY_CARDIO_POWER_AND_RES: "Cardio Power and Res (Insanity)",
  INSANITY_INSANE_ABS: "Insane Abs(Insanity)",
  INSANITY_CARDIO_RECOVERY: "Cardio Recovery (Insanity)",
  INSANITY_PURE_CARDIO: "Pure Cardio (Insanity)",
  INSANITY_CORE_CARDIO_AND_BALANCE: "Core Cardio and Balance (Insanity)",
  INSANITY_MAX_INTERVAL_CIRCUIT: "Max Interval Circuit (Insanity)",
  INSANITY_MAX_INTERVAL_PLYO: "Max Interval Plyo (Insanity)",
  INSANITY_MAX_CARDIO_CONDITIONING: "Max Cardio Conditioning (Insanity)",
  CARDIO_CYCLING_DUMBELLS: "Cycling and Dumbells",
  LEGS_FOUR_DAY: "Legs",
  CARDIO_CYCLING: "Cycling",
  CHEST_TRI_DAY_4: "Chest and Triceps",
  UPPER_CALVES: "Upper Body and Calves",
  BACK_BI_DAY_4: "Back and Biceps",
}

export default function(workout) {
  return enumToDisplayMap[workout]
}