module.exports = {
    main_screen: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    // Display results
   main_screen__display: {
  elevation: 10,
  width: '95%', // Adjust the width to make it smaller
  height: 15, // Set a specific height to make it smaller
  backgroundColor: 'white',
  borderRadius: 10,
  display: 'flex',
  // alignItems: 'flex-end',
  // justifyContent: 'flex-end',
  marginBottom: 10,
  padding: 10, // Reduce padding to make it smaller
},
    main_screen__display_text: {
        fontSize: 50,
        textAlign: 'right',
    },
    // ////////////////////////////////////////////////////////////////


    main_screen__keypad: {
        width: '100%',
        height: '70%',
        // backgroundColor: '#FF5757',
        display: 'flex',
        // justifyContent: 'center',
    },
    main_screen__keypad_row: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    btn_outer: {
        width: 90,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg_button: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 30,
    },


    btn1_outer: {
        width: 90,
        height: 75,
        backgroundColor: '#6495ED',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg1_button: {
        backgroundColor: '#6495ED',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },


    btn2_outer: {
        width: 90,
        height: 75,

        backgroundColor: 'grey',
        borderRadius: 90,
        elevation: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg2_button: {
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
}