import React from 'react';
import { connect } from 'react-redux';

const categoryItem = () => {
    return (
        this.props.category.data.map(item => (
            <TouchableOpacity 
                style={styles.modalBtn}>
                    
                <Image source={require('../icon/addcategory.png')} style={styles.addCatIcon} />
                
                <Text style={styles.addCatText}>{item.name}</Text>
            </TouchableOpacity>
        ))
    )
}

const mapStateToProps = state => {
    return {
        category: state.category
    }
}

export default connect(mapStateToProps)(categoryItem);