workoutApp.controller('workoutController', function($scope, $location){

	$scope.openLink = function(url){
		$location.path(url);
	};
	//The main workout plans linking to view for each
	$scope.workoutPlans = [
		{	"name" : "Vanilla Cake",
			"url" : "vanillaCake",
			"imgUrl" : "vanillaCake.jpg"
		},
		{	"name" : "Carrot Cake",
			"url" : "carrotCake",
			"imgUrl" : "carrotCake.jpg"
		},
		{	"name" : "Cheese Cake",
			"url" : "cheeseCake",
			"imgUrl" : "cheeseCake.jpg"
		},
		{	"name" : "Tiramisu",
			"url" : "tiramisu",
			"imgUrl" : "tiramisu.jpg"
		},
		{	"name" : "Wedding Cake",
			"url" : "weddingCake",
			"imgUrl" : "weddingCake.jpg"
		}
	];


	$scope.carrotCake = [

		{	"day" : "Day 1",
			"workouts" : [
				{	"name" : "Warm-up",
					"description" : "15 minute cardio and superset the following 3 times (do these exercises one after the other)",
					"reps" : "10 Crunches, 30 second plank"
				},
				{	"name" : "Mobility",
					"description" : "",
					"reps" : "Neck Rotation, Shoulder Rotation, Frog Stretch"
				},
				{	"name" : "Goblet Squat",
					"description" : "Start with easy weight and increase until the last 3 repetitions are difficult",
					"reps" : "10, 10, 12, 12"
				},
				{	"name" : "Dumbbell Lunge (superset with Jump Squats)",
					"description" : "",
					"reps" : "15, 5 Jump Squats, 15, 5 Jump Squats, 15, 5 Jump Squats, 15, 5 Jump Squats"
				},
				{	"name" : "Lat Pulldown",
					"description" : "Light weight, move slowly",
					"reps" : "20,20,15,12,15,20"
				},
				{	"name" : "Bent-over Dumbbel Row (superset with bicep curls)",
					"description" : "",
					"reps" : "15, 10 Bicep Curls, 15, 10 Bicep Curls, 15, 10 Bicep Curls, 10"
				},
				{	"name" : "Wrist curls with dumbbells or EZ bar",
					"description" : "",
					"reps" : "10, 10, 10"
				},
				{	"name" : "Calf Raises",
					"description" : "",
					"reps" : "100"
				}
			]
		},
		{	"day" : "Day 2",
			"workouts" : [
				{	"name" : "Warm-up",
					"description" : "20 minute cardio and superset the following 3 times (do these exercises one after the other)",
					"reps" : "25 Crunches, 1 minute plank"
				},
				{	"name" : "Mobility",
					"description" : "",
					"reps" : "Neck Rotation, Shoulder Rotation, Frog Stretch"
				},
				{	"name" : "Dumbbell Chest Press (superset with chest fly)",
					"description" : "",
					"reps" : "15, 12, 10,10"
				},
				{	"name" : "Chest Fly",
					"description" : "",
					"reps" : "15, 15, 15, 10"
				},
				{	"name" : "Shoulder Press (T-bar or Dumbbells)",
					"description" : "Superset with skull crushers",
					"reps" : "12, 12, 10, 10"
				},
				{	"name" : "Skull Crushers (EZ bar or Dumbbell)",
					"description" : "",
					"reps" : "12, 12, 12"
				},
				{	"name" : "Front and Lateral Raises (5-10Lb Plates)",
					"description" : "",
					"reps" : "15F, 15L, 15F, 15L, 10F, 10L"
				},
				{	"name" : "One arm tricep extension (rope attachment on cables)",
					"description" : "",
					"reps" : "10, 8, 8, 6"
				},
				{	"name" : "Rope bicep cable curl",
					"description" : "",
					"reps" : "10, 10, 10, 10"
				},
				{	"name" : "V-grip tricep pull down",
					"description" : "",
					"reps" : "25, 20, 15, 10"
				}
			]
		},
		{	"day" : "Day 3",
			"workouts" : [
				{	"name" : "Warm-up",
					"description" : "25 minute cardio and superset the following 3 times (do these exercises one after the other)",
					"reps" : "25 Sit-ups, 25 push-ups"
				},
				{	"name" : "Mobility",
					"description" : "",
					"reps" : "Neck Rotation, Shoulder Rotation, Frog Stretch"
				},
				{	"name" : "Dead lift (straight leg)",
					"description" : "",
					"reps" : "12, 12, 10, 10"
				},
				{	"name" : "Back Fly",
					"description" : "",
					"reps" : "15, 15, 15"
				},
				{	"name" : "Cable lat pull-down",
					"description" : "",
					"reps" : "15, 15, 15, 12"
				},
				{	"name" : "One-leg deadlift (with KB or dumbbells)",
					"description" : "",
					"reps" : "10, 5 burpees, 10, 5 burpees, 10, 5 burpees"
				}
			]
		}

	];


	$scope.weddingCake = [

		{	"day" : "Cardio",
			"workouts" : [
				{	"name" : "Cardio for both days",
					"description" : "30 minutes incline walk. Do intervals of moderate and hard inclines (2 min moderate speed, 2 min hard speed) and keep switching between the two for 30 minutes. If its too difficult, switch to 3 min moderate and 2 minutes hard.",
					"reps" : "",
					"imgUrl" : "imageNotAvailable.jpg"
				}
			]
		},
		{	"day" : "Day 1",
			"workouts" : [
				{	"name" : "",
					"description" : "Do the following four exercises for two minutes each (For planks hold for one minute each) and a minute of rest between exercises. Repeat three times.",
					"reps" : "",
					"imgUrl" : ""
				}
			]
		},
		{	"day" : "Workout Circuit 1",
			"workouts" : [
				{	"name" : "Jumping Jacks",
					"description" : "",
					"reps" : "",
					"imgUrl" : "imageNotAvailable.jpg"
				},
				{	"name" : "Mountain Climbers",
					"description" : "",
					"reps" : "",
					"imgUrl" : "mountainClimbers.jpg"
				},
				{	"name" : "High Plank",
					"description" : "",
					"reps" : "",
					"imgUrl" : "highPlank.jpg"
				},
				{	"name" : "High Side Plank",
					"description" : "",
					"reps" : "",
					"imgUrl" : "highSidePlanks.jpg"
				}
			]
		},
		{	"day" : "Workout Circuit 2",
			"workouts" : [
				{	"name" : "Bridge",
					"description" : "",
					"reps" : "",
					"imgUrl" : "bridge.jpg"
				},
				{	"name" : "One Leg Bridge",
					"description" : "",
					"reps" : "",
					"imgUrl" : "oneLegBridge.jpg"
				},
				{	"name" : "Toe Touches",
					"description" : "",
					"reps" : "",
					"imgUrl" : "toeTouches.jpg"
				},
				{	"name" : "Heel Touches",
					"description" : "",
					"reps" : "",
					"imgUrl" : "heelTouches.jpg"
				}
			]
		},
		{	"day" : "Workout Circuit 3",
			"workouts" : [
				{	"name" : "High Plank Hi-Five",
					"description" : "",
					"reps" : "",
					"imgUrl" : "highPlankHi5.jpg"
				},
				{	"name" : "High Plank Row",
					"description" : "",
					"reps" : "",
					"imgUrl" : "highPlankRow.jpg"
				},
				{	"name" : "Leg Lift",
					"description" : "",
					"reps" : "",
					"imgUrl" : "legLift.jpg"
				}
			]
		},
		{	"day" : "Day 2",
			"workouts" : [
				{	"name" : "",
					"description" : "Do the following four exercises for two minutes each (For planks hold for one minute each) and a minute of rest between exercises. Repeat three times.",
					"reps" : "",
					"imgUrl" : ""
				}
			]
		},
		{	"day" : "Workout Circuit 1",
			"workouts" : [
				{	"name" : "Jumping Jacks",
					"description" : "",
					"reps" : "",
					"imgUrl" : "imageNotAvailable.jpg"
				},
				{	"name" : "Mountain Climbers",
					"description" : "",
					"reps" : "",
					"imgUrl" : "mountainClimbers.jpg"
				},
				{	"name" : "Box Squats",
					"description" : "",
					"reps" : "",
					"imgUrl" : "boxSquats.jpg"
				},
				{	"name" : "Scissor Kicks",
					"description" : "",
					"reps" : "",
					"imgUrl" : "scissorKicks.jpg"
				}
			]
		},
		{	"day" : "Workout Circuit 2",
			"workouts" : [
				{	"name" : "Burpees",
					"description" : "",
					"reps" : "",
					"imgUrl" : "burpees.jpg"
				},
				{	"name" : "Wall Ball",
					"description" : "",
					"reps" : "",
					"imgUrl" : "wallBall.jpg"
				},
				{	"name" : "Dumbbell Deep Squats",
					"description" : "",
					"reps" : "",
					"imgUrl" : "dbDeepSquats.jpg"
				},
				{	"name" : "Box Squats",
					"description" : "",
					"reps" : "",
					"imgUrl" : "boxSquats.jpg"
				}
			]
		},
		{	"day" : "Workout Circuit 3",
			"workouts" : [
				{	"name" : "Dumbbell Swing",
					"description" : "",
					"reps" : "",
					"imgUrl" : "dumbbellSwings.jpg"
				},
				{	"name" : "Front and Lateral Raises",
					"description" : "",
					"reps" : "",
					"imgUrl" : "frontLateralRaise.jpg"
				},
				{	"name" : "Mountain Climbers",
					"description" : "",
					"reps" : "",
					"imgUrl" : "mountainClimbers.jpg"
				},
				{	"name" : "Jumping Jacks",
					"description" : "",
					"reps" : "",
					"imgUrl" : "imageNotAvailable.jpg"
				}
			]
		}
	];
});