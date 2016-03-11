'use strict';

angular.module('turnusApp')
  .controller('mainCtrl', function($scope, Member) {
    function getMembers() {
      $scope.members = Member.find();
    }

    $scope.sundays = [
      {
        date: '1. Søndag',
        attending: [],
        notAvailable: []
      },
      {
        date: '2. Søndag',
        attending: [],
        notAvailable: []
      },
      {
        date: '3. Søndag',
        attending: [],
        notAvailable: []
      },
      {
        date: '4. Søndag',
        attending: [],
        notAvailable: []
      },
      {
        date: '5. Søndag',
        attending: [],
        notAvailable: []
      }
    ];


    //Reset data
    $scope.reset = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        $scope.members[i].available1 = true;
        $scope.members[i].available2 = true;
        $scope.members[i].available3 = true;
        $scope.members[i].available4 = true;
        $scope.members[i].available5 = true;
        $scope.members[i].chosen1 = false;
        $scope.members[i].chosen2 = false;
        $scope.members[i].chosen3 = false;
        $scope.members[i].chosen4 = false;
        $scope.members[i].chosen5 = false;
        $scope.members[i].$save();
        console.log('Reset')
      }
    }

    //Select all available for event
    $scope.selectAll1 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].available1 == true) {
          $scope.members[i].chosen1 = true;
          $scope.members[i].$save();
        }
      }
    }

    $scope.unselectAll1 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].chosen1 == true) {
          $scope.members[i].chosen1 = false;
          $scope.members[i].$save();
        }
      }
    }

    $scope.selectAll2 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].available2 == true) {
          $scope.members[i].chosen2 = true;
          $scope.members[i].$save();
        }
      }
    }

    $scope.unselectAll2 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].chosen2 == true) {
          $scope.members[i].chosen2 = false;
          $scope.members[i].$save();
        }
      }
    }

    $scope.selectAll3 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].available3 == true) {
          $scope.members[i].chosen3 = true;
          $scope.members[i].$save();
        }
      }
    }

    $scope.unselectAll3 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].chosen3 == true) {
          $scope.members[i].chosen3 = false;
          $scope.members[i].$save();
        }
      }
    }

    $scope.selectAll4 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].available4 == true) {
          $scope.members[i].chosen4 = true;
          $scope.members[i].$save();
        }
      }
    }

    $scope.unselectAll4 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].chosen4 == true) {
          $scope.members[i].chosen4 = false;
          $scope.members[i].$save();
        }
      }
    }

    $scope.selectAll5 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].available5 == true) {
          $scope.members[i].chosen5 = true;
          $scope.members[i].$save();
        }
      }
    }

    $scope.unselectAll5 = function() {
      for (var i = 0; i < $scope.members.length; i++) {
        if ($scope.members[i].chosen5 == true) {
          $scope.members[i].chosen5 = false;
          $scope.members[i].$save();
        }
      }
    }

    //Select not available
    $scope.available1 = function available() {
      this.member.available1 = !this.member.available1;
      this.member.$save();
    }

    $scope.available2 = function available() {
      this.member.available2 = !this.member.available2;
      this.member.$save();
    }

    $scope.available3 = function available() {
      this.member.available3 = !this.member.available3;
      this.member.$save();
    }

    $scope.available4 = function available() {
      this.member.available4 = !this.member.available4;
      this.member.$save();
    }

    $scope.available5 = function available() {
      this.member.available5 = !this.member.available5;
      this.member.$save();
    }

    //Select people for event

    $scope.chosen1 = function available() {
      this.member.chosen1 = !this.member.chosen1;
      this.member.$save();
    }

    $scope.chosen2 = function available() {
      this.member.chosen2 = !this.member.chosen2;
      this.member.$save();
    }

    $scope.chosen3 = function available() {
      this.member.chosen3 = !this.member.chosen3;
      this.member.$save();
    }

    $scope.chosen4 = function available() {
      this.member.chosen4 = !this.member.chosen4;
      this.member.$save();
    }

    $scope.chosen5 = function available() {
      this.member.chosen5 = !this.member.chosen5;
      this.member.$save();
    }

    //Clears the input fields on workers
    function clearInput() {
      $scope.member = {
        firstname: '',
        lastname: '',
        position: ''
      };
    }


    $scope.addMember = function addMember() {
      var member = Member.create($scope.member);
      $scope.members.push(Member)
      getMembers();
      clearInput();
    }

    $scope.removeMember = function removeMember() {
      Member.deleteById({
          id: this.member.id
        })
        .$promise
        .then(function() {
          getMembers();
        });
    }

    //TODO updateMember
    getMembers();

  });
