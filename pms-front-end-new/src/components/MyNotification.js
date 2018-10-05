import './bootstrap-notify.min';
class MyNotification {

    handleStyle = { 
        template : '<div data-notify="container"  class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +            
            '<p data-notify="message">{2}</p>' +                         
            '</div>' , 
        animate  : {
                enter: 'animated zoomIn',
                exit: 'animated zoomOut'
        }
    }
    
    
    alertSuccess = (message, url) => {

      $.notify({
            
         
            message,
            url,
           
        }, {
                type: 'info',
                allow_dismiss: true,
                placement:{from:'top', align:'right'},
          
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 3000,
                timer: 50,
                url_target: '_blank',
                mouse_over: 'pause',
                animate: this.handleStyle.animate,
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: 'class',
                template: this.handleStyle.template
        
        });
       
                                  
    }
    alertError = (message, url) => {
        $.notify({
            message,
            url,
            icon:'fa fa-newspaper-o',
            target: "_blank"
        }, {
            type: 'danger',
            placement:{from:'top', align:'right'},
            animate :  this.handleStyle.animate,
            template: this.handleStyle.template
        })                             
    }
    
}
export default new MyNotification