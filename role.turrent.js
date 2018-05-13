var roleTurrent = {

    /** @param {Creep} creep **/
    run: function(turrentID) {

        var tower = Game.getObjectById(turrentID);
        if(tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
           });
           if(closestDamagedStructure) {
               tower.repair(closestDamagedStructure);
           }

          var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
          if(closestHostile) {
              tower.attack(closestHostile);
          }
        }
	}
};

module.exports = roleTurrent;